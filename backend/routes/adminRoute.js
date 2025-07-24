import express from "express";
import multer from "multer";
import { addDoctor, loginAdmin } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router();

// Error handling middleware for multer
const handleMulterError = (error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({
        success: false,
        message: "Unexpected field name. Expected field name: image",
      });
    }
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
  next(error);
};

adminRouter.post(
  "/add-doctor",

  authAdmin,
  upload.single("image"),
  handleMulterError,
  addDoctor
);
adminRouter.post("/login", loginAdmin);

export default adminRouter;
