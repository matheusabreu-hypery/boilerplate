import { Request, Response, NextFunction } from "express";
import { INTERNAL_SERVER_ERROR } from "http-status";

import ErrorBuilder from "../utils/errorBuilder";

export default function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): Response {
  if (error instanceof ErrorBuilder) {
    if (error.details.data) {
      const { data } = error.details;

      return response.status(error.statusCode).json(data);
    }

    return response.status(error.statusCode).json({
      name: error.name,
      status: error.statusCode,
      message: error.message,
      details: error.details || [],
    });
  }

  return response.status(INTERNAL_SERVER_ERROR).json({
    name: "InternalServerError",
    status: INTERNAL_SERVER_ERROR,
    message: error.message || "Internal Server Error",
    details: [],
  });
}
