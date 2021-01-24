import { Request, Response } from "express";
import { v4 as uuid } from "uuid";

const signIn = (_req: Request, res: Response) => {
  res.json({
    token: uuid(),
  });
};
const signUp = (_req: Request, res: Response) => {
  res.json({
    token: uuid(),
  });
};

export default {
  signIn,
  signUp,
};
