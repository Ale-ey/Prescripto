import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

// app config

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middelwares

app.use(express.json());
app.use(cors());
app.use("/api/admin", adminRouter);

// api end point
app.get("/", (req, res) => {
  res.send("Api working Great ");
});

// Global error handler
app.use((error, req, res, next) => {
  if (error.code === "MULTERERROR" || error.name === "MulterError") {
    return res.status(400).json({
      success: false,
      message: error.message || "File upload error",
    });
  }

  console.error("Error:", error);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

app.listen(PORT, () => console.log("Server Started", PORT));
