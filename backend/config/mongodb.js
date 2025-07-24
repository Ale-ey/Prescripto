import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));
  mongoose.connection.on("error", (err) =>
    console.log("Database connection error:", err)
  );

  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/prescripto`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
