import User from "../models/user.mjs";

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(err);
  }
};

export default { getUsers };
