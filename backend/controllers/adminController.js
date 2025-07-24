import { log } from "console";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import validator from "validator";
import jwt from "jsonwebtoken";
import doctorModel from "../models/doctorModel.js";
import jtw from "jsonwebtoken";
// api for add doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    // Debug: Log received data
    console.log("Received form data:", req.body);
    console.log("Received file:", req.file ? req.file.filename : "No file");

    // Trim all string fields to remove extra spaces
    const trimmedData = {
      name: name?.trim(),
      email: email?.trim(),
      password: password?.trim(),
      speciality: speciality?.trim(),
      degree: degree?.trim(),
      experience: experience?.trim(),
      about: about?.trim(),
      fees: fees?.trim(),
      address: address?.trim(),
    };

    console.log("After trimming:", trimmedData);

    // Check if image file is provided
    if (!imageFile) {
      return res.json({ success: false, message: "Image file is required." });
    }

    // checking for all data to add doctor
    const missingFields = [];
    if (!trimmedData.name || trimmedData.name === "")
      missingFields.push("name");
    if (!trimmedData.email || trimmedData.email === "")
      missingFields.push("email");
    if (!trimmedData.password || trimmedData.password === "")
      missingFields.push("password");
    if (!trimmedData.speciality || trimmedData.speciality === "")
      missingFields.push("speciality");
    if (!trimmedData.degree || trimmedData.degree === "")
      missingFields.push("degree");
    if (!trimmedData.experience || trimmedData.experience === "")
      missingFields.push("experience");
    if (!trimmedData.about || trimmedData.about === "")
      missingFields.push("about");
    if (!trimmedData.fees || trimmedData.fees === "")
      missingFields.push("fees");
    if (!trimmedData.address || trimmedData.address === "")
      missingFields.push("address");

    if (missingFields.length > 0) {
      return res.json({
        success: false,
        message: `Missing fields: ${missingFields.join(", ")}`,
      });
    }
    if (!validator.isEmail(trimmedData.email)) {
      return res.json({
        success: false,
        message: "Please Enter a valid Email.",
      });
    }
    if (trimmedData.password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password.",
      });
    }

    // hasing doctor password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(trimmedData.password, salt);

    //upload img to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name: trimmedData.name,
      email: trimmedData.email,
      image: imageUrl,
      password: hashedpassword,
      speciality: trimmedData.speciality,
      degree: trimmedData.degree,
      experience: trimmedData.experience,
      about: trimmedData.about,
      fees: trimmedData.fees,
      address: JSON.parse(trimmedData.address),
      date: Date.now(),
    };
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: "Doctor Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//api for  admin login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addDoctor, loginAdmin };
