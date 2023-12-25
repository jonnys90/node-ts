import { Router } from "express";
import {
  getHandler,
  postHandler,
  putHandler,
  postJoiTest,
} from "../../controllers/cardsController";
import validationMiddleware from "../../middleware/validation.middleware";
import { validateLogin } from "../../validation/loginValidation";
const router = Router();
//http://localhost:3030/api/cards/
router.get("/", getHandler);
//http://localhost:3030/api/cards/2023/12/20?filter=asld&sort=sdf
router.post("/:year/:month/:day", postHandler);
router.put("/:id", putHandler);
router.post("/joi-test", validationMiddleware(validateLogin), postJoiTest);
export default router;
