import { Router } from "express";
import staffsRoutes from "./staffs.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root"));

router.use("/staffs", staffsRoutes);

export default router;
