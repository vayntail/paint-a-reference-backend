import Comment from "../models/comment.mjs";

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).send(err);
  }
};

export default { getComments };
