import express from "express";
import { createproduct } from "../controllers/productcontroller.js";
const router = express.Router();

// post request
router.post("/create",createproduct);

export default router;