import express from 'express';
const router = express.Router();

//import controller
import * as AssignController from '../controller/assign_project.controller.js';

router.post("/save",AssignController.save);

router.get("/fetch",AssignController.fetch);

router.delete("/delete",AssignController.deleteAssign_Project);

router.patch("/update",AssignController.updateAssign_Project);

export default router;