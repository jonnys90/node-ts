import chalk from "chalk";
import { Request, Response } from "express";
import morgan, { TokenIndexer } from "morgan";

const morganLogger = morgan(
  (
    tokens: TokenIndexer<Request, Response>,
    req: Request,
    res: Response
  ): string | undefined | null => {
    let log = [
      new Date().toISOString(),
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
    let status = tokens.status(req, res);
    if (status && +status >= 400) {
      return chalk.redBright(log);
    } else {
      return chalk.greenBright(log);
    }
  }
);

export default morganLogger;
