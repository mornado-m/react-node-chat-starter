import { Request, Response } from "express";
import { v4 as uuid } from "uuid";

const signIn = (_req: Request, res: Response) => {
  res.json({
    token: uuid(),
    userId: uuid(),
  });
};
const signUp = (_req: Request, res: Response) => {
  res.json({
    token: uuid(),
    userId: uuid(),
  });
};

export default {
  signIn,
  signUp,
};
