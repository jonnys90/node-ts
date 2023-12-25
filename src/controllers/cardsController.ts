import { Request, Response } from "express";
import CardBodyType from "../@types/CardBodyType";
import CardQueryType from "../@types/CardQueryType";
import CardParamsType from "../@types/CardParamsType";

const getHandler = (req: Request, res: Response) => {
  console.log("sub route");
  res.json({ msg: "hello from cards route" });
};

//Request<params, {}, body, query>
const postHandler = (
  req: Request<CardParamsType, {}, CardBodyType, CardQueryType>,
  res: Response
) => {
  console.log("body", req.body);
  console.log("query", req.query);
  console.log("params", req.params);
  console.log("headers", req.headers);
  res.json({
    body: req.body,
    query: req.query,
    params: req.params,
  });
};

const putHandler = (
  req: Request<{ id: string }, {}, { title: string; subtitle: string }, {}>,
  res: Response
) => {
  // res.status(400).json({ msg: "email is not valid" });
  throw new Error("something went wrong");
};

const postJoiTest = (req: Request, res: Response) => {
  console.log("sub route");
  res.json({ msg: "hello from cards route" });
};

export { getHandler, postHandler, putHandler, postJoiTest };
