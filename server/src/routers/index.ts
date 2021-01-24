import { Express } from "express";
import authorizationRouter from "./authorization.router";

const registerRoutes = (app: Express) => {
  app.use("/auth", authorizationRouter);
};

export default registerRoutes;
