import express from "express";
import { getDolarBlue, getEvolucionDolarBlue } from "../controllers/dollarController.js";

const router = express.Router();

router.get("/", getDolarBlue);
router.get("/historical", getEvolucionDolarBlue);

export default router;