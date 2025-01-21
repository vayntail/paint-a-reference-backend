import Study from "../models/study.mjs";
import User from "../models/user.mjs";

// GET /api/studies
const getStudies = async (req, res) => {
  try {
    const studies = await Study.find({});
    res.status(200).json(studies);
  } catch (err) {
    res.status(400).send(err);
  }
};

// POST /api/studies
const createStudy = async (req, res) => {
  try {
    const study = await Study.create(req.body);
    console.log(req.body);
    res.status(200).json(study);
  } catch (err) {
    res.status(400).send(err);
  }
};

// GET /api/studies/:id
const getStudyById = async (req, res) => {
  try {
    const study = await Study.findById(req.params.id);
    res.status(200).json(study);
  } catch (err) {
    res.status(400).send(err);
  }
};

// PUT /api/studies/:id
const updateStudyById = async (req, res) => {
  try {
    const study = await Study.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!study) return res.status(404).json("study not found");
    res.status(200).json(study);
  } catch (err) {
    res.status(400).send(err);
  }
};

// DELETE /api/studies/:id
const deleteStudyById = async (req, res) => {
  try {
    const study = await Study.findByIdAndDelete(req.params.id);
    if (!study) return res.status(404).json("study not found.");
    res.status(200).json(study);
  } catch (err) {
    res.status(400).send(err);
  }
};

// POST /api/studies/:id/fav
const toggleFavStudyById = async (req, res) => {
  const userId = req.body.userId;
  const studyId = req.params.id;
  try {
    const user = await User.findById(userId);
    const study = await Study.findById(studyId);

    if (!user || !study) return res.status(404).json("user or ref not found.");

    // check if user faved or not
    if (user.favStudies.includes(studyId)) {
      // if it does, remove it. update on both models
      user.favStudies = user.favStudies.filter(
        (id) => id.toString() !== studyId
      );
      study.favedUsers = study.favedUsers.filter(
        (id) => id.toString() !== userId
      );
    } else {
      // if not, add to fav
      user.favStudies.push(studyId);
      study.favedUsers.push(userId);
    }

    await user.save();
    await study.save();

    res.status(200).json(study);
  } catch (err) {
    res.status(400).json(err);
  }
};

export default {
  getStudies,
  createStudy,
  getStudyById,
  updateStudyById,
  deleteStudyById,
  toggleFavStudyById,
};
