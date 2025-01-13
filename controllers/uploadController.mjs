const API_KEY = process.env.IMGBB_API_KEY;

const uploadImage = async (req, res) => {
  const { image } = req.body;
  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({ image }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const result = await response.json();
    res.json(result);
  } catch (err) {
    res.status(500).send("error uploading image, ", err);
  }
};

export default { uploadImage };
