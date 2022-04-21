import { Request, Response, Router, NextFunction } from "express";
import { OK } from "http-status";
import { container } from "tsyringe";

import SmartService from "../../domain/service/smartService";
import schemaValidator from "../middleware/schemaValidator";
import { smartSchema } from "../schemas/index";

const SmartContractController = Router();

SmartContractController.post(
  "/",
  schemaValidator(smartSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body, query } = req;

      const smartService = container.resolve(SmartService);
      res.status(OK).json(await smartService.execute(body, query));
    } catch (error) {
      next(error);
    }
  }
);

export default SmartContractController;
