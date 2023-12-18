import { Router } from "express";
import { getHandler } from "../../controllers/cardsController";
const router = Router();
//http://localhost:3030/api/cards/
router.get("/", getHandler);
export default router;
