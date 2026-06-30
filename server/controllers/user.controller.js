import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  try {
    const data = req.body;
    const password = data.password;
    const email = data.email;
    const user = await User.findOne({ email });
    console.log("Mongodb user",user);
    if (!user) {
      return res.json({
        success: false,
        message: "User does not Exist!",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("mathced",isMatch);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Wrong Password",
      });
    }
    // console.log("id",user._id);
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.json({
      success: true,
      message: "User Logged In",
      token: token,
      data: data,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
