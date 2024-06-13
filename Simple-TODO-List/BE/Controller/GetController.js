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

const getcontrollerMethodByID = async (req, res) => {
  try {
    const { id } = req.params;
    const getdata = await PostModel.findById(id);

    if (getdata) {
      return res.status(200).json({ status: "Success", data: { getdata } });
    } else {
      res.status(404).json({
        status: "Failed",
        message: "No ID found for the List the details",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "Internal Server Error" });
  }
};

module.exports = { getcontrollerMethod, getcontrollerMethodByID };
