import cds from "@sap/cds";
import { Request } from "@sap/cds/apis/services";

export class AdminService extends cds.ApplicationService {
  init() {
    this.before("NEW", "Authors", genid);
    this.before("NEW", "Books", genid);
    return super.init();
  }
}

/** Generate primary keys for target entity in request */
const genid = async (req: Request) => {
  const { ID } = await cds
    .tx(req)
    .run(SELECT.one.from(req.target).columns("max(ID) as ID"));
  req.data.ID = ID - (ID % 100) + 100 + 1;
};
