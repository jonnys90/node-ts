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
  res.json({
    body: req.body,
    query: req.query,
    params: req.params,
  });
};

export { getHandler, postHandler };
