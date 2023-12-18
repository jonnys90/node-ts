import { Router, Request, Response } from "express";
import cardsRoute from "./cardsRoute";
const router = Router();
//http://localhost:3030/api/
router.get("/", (req: Request, res: Response) => {
  console.log("sub route");
  res.json({ msg: "hello from api route" });
});

router.use("/cards", cardsRoute);
export default router;
