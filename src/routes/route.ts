import { Router, Request, Response } from "express";
import apiRoute from "./api/apiRoute";
const router = Router();
//http://localhost:3030/
router.get("/", (req: Request, res: Response) => {
  console.log("sub route");
  res.json({ msg: "hello from server" });
});

router.use("/api", apiRoute);

export default router;

/**
 * http://localhost:3030/ - route.ts
 * http://localhost:3030/api/ - apiRoute.ts
 * http://localhost:3030/api/cards/ - cardsRoute.ts
 * http://localhost:3030/api/users/ - usersRoute.ts
 */
