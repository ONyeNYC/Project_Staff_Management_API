import { Router } from "express";
import * as controllers from "../controllers/staffs.js";

const router = Router();

router.get("/", controllers.getStaffs);
router.get("/:id", controllers.getStaff);
router.post("/", controllers.createStaff);
router.put("/:id", controllers.updateStaff);
router.delete("/:id", controllers.deleteStaff);
router.get("/name/:name", controllers.getStaffByName);

export default router;
