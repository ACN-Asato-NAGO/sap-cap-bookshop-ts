import cds from "@sap/cds";
import { IActionSubmitOrderParams, IBooks } from "./types/CatalogService";

export class CatalogService extends cds.ApplicationService {
  async init() {
    const db = await cds.connect.to("db");
    const { Books } = db.entities;
    const { ListOfBooks } = this.entities;

    // Reduce stock of ordered books if available stock suffices
    this.on("submitOrder", async req => {
      const params = req.data as IActionSubmitOrderParams;

      const { book, quantity } = params;
      if (quantity < 1) {
        return req.reject(400, `quantity has to be 1 or more`);
      }
      let books = (await SELECT`stock`.from(Books, book)) as IBooks;
      if (!books) {
        return req.error(404, `Book #${book} doesn't exist`);
      }
      let { stock } = books;
      if (quantity > stock) {
        return req.reject(409, `${quantity} exceeds stock for book #${book}`);
      }
      await UPDATE(Books, book).with({ stock: (stock -= quantity) });
      await this.emit("OrderedBook", { book, quantity, buyer: req.user.id });

      return { stock };
    });

    // Add some discount for overstocked books
    this.after("READ", ListOfBooks, each => {
      if (each.stock > 111) {
        each.title += ` -- 11% discount!`;
      }
    });

    return super.init();
  }
}
