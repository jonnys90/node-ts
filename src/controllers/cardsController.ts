import { Request, Response } from "express";

const getHandler = (req: Request, res: Response) => {
  console.log("sub route");
  res.json({ msg: "hello from cards route" });
};

export { getHandler };
