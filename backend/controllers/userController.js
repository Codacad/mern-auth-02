import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const getUsers = async (req, res) => {
  res.json({ id: Date.now(), name: "Mohd Rizwan", age: 25 });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send({ message: "Fill all fields" });
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const isUserExist = await User.findOne({ email });
      if (!isUserExist) {
        const newUser = { name, email, password: hashedPassword };
        const user = await User.create(newUser);
        let token;
        // (async function () {
        token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "30d",
        });
        res.cookie("authToken", token, {
          httpOnly: false,
          secure: process.env.NODE_ENV === "prodution",
          maxAge: 1000 * 60 * 60 * 24,
        });
        // })();

        res.status(201).send({ message: "Registered Successfully", user });
      } else {
        res.status(400).send({ message: "Email is already registered" });
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
};

export const signin = async (req, res) => {
  res.send("Signin");
};
export const protect = async (req, res) => {
  res.send("Protect Routes");
};
