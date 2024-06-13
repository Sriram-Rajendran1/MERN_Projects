const PostModel = require("../Model/PostModel");

const updatecontrollerMethod = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, priority } = req.body;

    // const findId = await PostModel.findById(id);
    // console.log(findId);
    const findId = await PostModel.findById(id);
    console.log(`Find result: ${findId}`);

    if (!findId) {
      console.log("ID not found, returning 404");
      return res
        .status(404)
        .json({ status: "failed", message: "Id Not found for update" });
    }
    const updateitem = await PostModel.findByIdAndUpdate(
      id,
      {
        title: title,
        description: description,
        status: status,
        priority: priority,
      },
      { new: true }
    );
    res.status(202).json({
      status: "Success",
      message: "updated Successfully",
      updateitem: updateitem,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "internal Server error" });
  }
};

module.exports = { updatecontrollerMethod };
