/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from "express";
import joi, { ObjectSchema } from "joi";

const schemaValidator = (
  schema: ObjectSchema = joi.object({})
): ((req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(req.body);

    if (result.error) {
      const { error } = result;
      const message = error.details
        .map((errObject) => errObject.message)
        .toString();

      return res.status(400).json({
        name: "BadRequest",
        message,
        details: error.details,
      });
    }

    next();
  };
};

export default schemaValidator;
