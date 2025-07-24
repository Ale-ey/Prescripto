import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

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
export { upload, handleMulterError };
