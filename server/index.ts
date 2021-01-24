// import mongoose from "mongoose";
import express, { Request, Response, NextFunction } from "express";
import registerRoutes from "./src/routers";
import { BaseApiError } from "./src/models/errors";

const app = express();

registerRoutes(app);

app.use(
  (err: BaseApiError, _req: Request, res: Response, _next: NextFunction) => {
    res.status(err.status || 500).json({
      success: err.success,
      status: err.status,
      message: err.message,
    });
  }
);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Express started on port ${port}`);
});
