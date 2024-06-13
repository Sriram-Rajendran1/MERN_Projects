const PostModel = require("../Model/PostModel");

const getcontrollerMethod = async (req, res) => {
  try {
    const getdata = await PostModel.find();
    res.status(200).json({ status: "Success", data: { getdata } });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "Internal Server Error" });
  }
};

module.exports = { getcontrollerMethod };
