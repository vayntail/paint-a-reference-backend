import Ref from "../models/ref.mjs";
import User from "../models/user.mjs";

// GET /api/refs
const getRefs = async (req, res) => {
  try {
    const refs = await Ref.find({});
    res.status(200).json(refs);
  } catch (err) {
    res.status(400).send(err);
  }
};

// POST /api/refs
const createRef = async (req, res) => {
  try {
    const ref = await Ref.create(req.body);
    console.log(req.body);
    res.status(200).json(ref);
  } catch (err) {
    res.status(400).send(err);
  }
};

// GET /api/refs/:id
const getRefById = async (req, res) => {
  try {
    const ref = await Ref.findById(req.params.id);
    res.status(200).json(ref);
  } catch (err) {
    res.status(400).send(err);
  }
};

// PUT /api/refs/:id
const updateRefById = async (req, res) => {
  try {
    const ref = await Ref.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!ref) return res.status(404).json("ref not found");
    res.status(200).json(ref);
  } catch (err) {
    res.status(400).send(err);
  }
};

// DELETE /api/refs/:id
const deleteRefById = async (req, res) => {
  try {
    const ref = await Ref.findByIdAndDelete(req.params.id);
    if (!ref) return res.status(404).json("ref not found.");
    res.status(200).json(ref);
  } catch (err) {
    res.status(400).send(err);
  }
};

// POST /api/refs/:id/fav
const toggleFavRefById = async (req, res) => {
  const userId = req.body.userId;
  const refId = req.params.id;
  try {
    const user = await User.findById(userId);
    const ref = await Ref.findById(refId);

    if (!user || !ref) return res.status(404).json("user or ref not found.");

    // check if user faved or not
    if (user.favRefs.includes(refId)) {
      // if it does, remove it. update on both models
      user.favRefs = user.favRefs.filter((id) => id.toString() !== refId);
      ref.favedUsers = ref.favedUsers.filter((id) => id.toString() !== userId);
    } else {
      // if not, add to fav
      user.favRefs.push(refId);
      ref.favedUsers.push(userId);
    }

    await user.save();
    await ref.save();

    res.status(200).json(ref);
  } catch (err) {
    res.status(400).json(err);
  }
};

export default {
  getRefs,
  createRef,
  getRefById,
  updateRefById,
  deleteRefById,
  toggleFavRefById,
};
