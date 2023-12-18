import { Router } from "express";
import { getHandler, postHandler } from "../../controllers/cardsController";
const router = Router();
//http://localhost:3030/api/cards/
router.get("/", getHandler);
router.post("/:year/:month/:day", postHandler);
export default router;
