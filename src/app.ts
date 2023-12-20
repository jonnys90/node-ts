import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import myMorgan from "./service/morgan";
import route from "./routes/route";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(myMorgan);
// app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req: Request, res: Response) => {
//   console.log("hello world");
//   //   res.send()
//   res.json({ msg: "hello from server" });
// });

app.use(route);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  //   console.log({ err });
  res.status(500).json({ err: err.message });
});

export default app;
