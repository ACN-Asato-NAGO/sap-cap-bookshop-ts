import cds from "@sap/cds";
import { Request } from "@sap/cds/apis/services";

export class UserService extends cds.Service {
  async init() {
    this.on("READ", "me", ({ tenant, user, locale }) => ({
      id: user.id,
      locale,
      tenant,
    }));
    this.on("login", (req: Request) => {
      const { user, data } = req;
      console.log({ user });
      if (user) {
        return this.read("me");
      }
      // res.set("WWW-Authenticate", 'Basic realm="Users"').sendStatus(401);
    });
  }
}
