import Ref from "../models/ref.mjs";

// GET /api/refs --- get all refs
const getRefs = async (req, res) => {
  try {
    const refs = await Ref.find({});
    res.status(200).json(refs);
  } catch (err) {
    res.status(400).send(err);
  }
};

export default { getRefs };
