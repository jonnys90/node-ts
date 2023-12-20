import { Router } from "express";
import {
  getHandler,
  postHandler,
  putHandler,
} from "../../controllers/cardsController";
const router = Router();
//http://localhost:3030/api/cards/
router.get("/", getHandler);
//http://localhost:3030/api/cards/2023/12/20?filter=asld&sort=sdf
router.post("/:year/:month/:day", postHandler);
router.put("/:id", putHandler);
export default router;
