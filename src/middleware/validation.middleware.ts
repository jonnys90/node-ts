import { Request, Response, NextFunction, RequestHandler } from "express";
/**
 * body
 * params
 * query
 */

type JoiValidateFunction = (inputToCheck: any) => { [key: string]: any } | null;
const validateMiddleware = (
  bodyValidateFunc?: JoiValidateFunction,
  paramsValidateFunc?: Function,
  queryValidateFunc?: Function
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): any => {
    if (bodyValidateFunc) {
      let errors = bodyValidateFunc(req.body);
      if (errors) {
        return res.status(400).json({ err: errors });
      }
    }
    if (paramsValidateFunc) {
      let errors = paramsValidateFunc(req.params);
      if (errors) {
        return res.status(400).json({ err: errors });
      }
    }
    if (queryValidateFunc) {
      let errors = queryValidateFunc(req.query);
      if (errors) {
        return res.status(400).json({ err: errors });
      }
    }
    next();
  };
};

export default validateMiddleware;
