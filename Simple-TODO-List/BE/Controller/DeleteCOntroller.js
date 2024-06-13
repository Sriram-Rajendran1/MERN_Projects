const PostModel = require("../Model/PostModel");

const deletControllerMethod = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const findId = await PostModel.findById(id);

    if (findId) {
      const deletedtodo = await PostModel.findByIdAndDelete(id);
      res.status(202).json({
        status: "Success",
        data: `${id}, Deleted Successfully`,
        deletedtodo: deletedtodo,
      });
    } else {
      res
        .status(404)
        .json({ status: "failed", message: `${id}, Id not found` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: "Failed", message: "internal Server Error!" });
  }
};

module.exports = { deletControllerMethod };
