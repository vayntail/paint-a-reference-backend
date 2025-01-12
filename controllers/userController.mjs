import User from "../models/user.mjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(err);
  }
};

// POST /api/users
const createUser = async (req, res) => {
  try {
    const createdUser = await User.create(req.body);
    const token = createJWT(createdUser);
    res.status(200).json(token);
  } catch (err) {
    res.status(400).send(err);
  }
};

// GET /api/users/:id
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

// POST /api/users/login
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json("user not found");

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(404).json("password invalid");

    const token = createJWT(user);
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
};

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

export default { getUsers, createUser, getUserById, login, createJWT };
