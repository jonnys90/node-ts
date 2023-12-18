import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import myMorgan from "./service/morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(myMorgan);
// app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req: Request, res: Response) => {
  console.log("hello world");
  //   res.send()
  res.json({ msg: "hello from server" });
});

export default app;
