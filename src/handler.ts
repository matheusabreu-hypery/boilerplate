import awsServerlessExpress from "aws-serverless-express";

import { Server } from "./application/server";

const server = new Server();

const serverlessServer = awsServerlessExpress.createServer(server.getApp());

export default function handler(event, context) {
  return awsServerlessExpress.proxy(serverlessServer, event, context);
}
