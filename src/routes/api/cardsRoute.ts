import { Router, Request, Response } from "express";
const router = Router();
//http://localhost:3030/api/cards/
router.get("/", (req: Request, res: Response) => {
  console.log("sub route");
  res.json({ msg: "hello from cards route" });
});
export default router;
