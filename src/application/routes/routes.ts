import { Router } from "express";

import SmartContractController from "../controller/smartContractController";

const routes = Router();

routes.use("/create", SmartContractController);

export default routes;
