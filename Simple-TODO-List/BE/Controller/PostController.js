const PostModel = require("../Model/PostModel");

const PostContollerMethod = async (req, res) => {
  try {
    const { title, description, status, priority } = req.body;
    const postModel = await PostModel.create({
      title,
      description,
      status,
      priority,
    });
    res
      .status(201)
      .json({ status: "Created Successfully", data: { postModel } });
  } catch (error) {
    res.status(404).json({ status: "Failed", message: { error } });
  }
};

module.exports = { PostContollerMethod };
