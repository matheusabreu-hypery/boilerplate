import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import * as http from "http";
import pinoHttp from "pino-http";

import logger from "../infra/helper/logger";
import Ioc from "./config/ioc";
import setupSwagger from "./config/swagger";
import errorHandler from "./middleware/errorHandler";
import routes from "./routes/routes";

export class Server {
  private server?: http.Server;
  private app = express();

  constructor() {
    dotenv.config();
  }

  private setupExpress(): void {
    this.app.use(cors());
    this.app.use(pinoHttp({ logger }));
    this.app.use(express.json());
    this.app.use("/", routes);
    this.app.use(errorHandler);
  }

  private setupSwagger(): void {
    setupSwagger(this.app);
  }

  private setupIoc(): void {
    const ioc = new Ioc();
    ioc.configureServices();
  }

  public getApp(): Application {
    this.setupIoc();
    this.setupSwagger();
    this.setupExpress();
    return this.app;
  }
}
