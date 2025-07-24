import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      return res.json({
        success: false,
        message: "Not Authorized login again.",
      });
    }

    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not Authorized login again.",
      });
    }

    next(); // Call next() to proceed to the next middleware
  } catch (error) {
    console.log("Auth error:", error);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
