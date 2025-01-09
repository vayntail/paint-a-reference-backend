import Study from "../models/study.mjs";

const getStudies = async (req, res) => {
  try {
    const studies = await Study.find({});
    res.status(200).json(studies);
  } catch (err) {
    res.status(400).send(err);
  }
};

export default { getStudies };
