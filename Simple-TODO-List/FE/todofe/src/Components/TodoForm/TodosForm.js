import React, { useContext } from "react";
import "../TodoForm/TodoForm.css";
import { UserContext } from "../Context/UserContext";

const apiUrl = "http://localhost:4000/api/v1/posttodos";

const TodosForm = () => {
  const { input, setInput, data, setData, edit, setEdit } =
    useContext(UserContext);

  const handleTitle = (e) => {
    const { name, value } = e.target;
    setInput((previnp) => ({ ...previnp, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const result = await response.json();
      //console.log("Data posted:", result);
      // Optionally, you can handle the result or update state after successful post

      fetch("http://localhost:4000/api/v1/gettodos")
        .then((response) => {
          if (!response) {
            throw console.error(`Networkresponse not OK`);
          }
          return response.json();
        })
        .then((datas) => {
          //console.log(datas.data.getdata);
          setData(datas.data.getdata);
        })
        .catch((err) => {
          console.log("error in display");
        });
    } catch (error) {
      console.error("Error posting data:", error);
    }

    setData([...data, input]);
    setInput({
      title: "",
      description: "",
      status: "pending",
      priority: "medium",
    });
    setEdit(0);
  };

  const isInputvalid = () => {
    return input.title.trim() !== "" && input.description.trim() !== "";
  };

  return (
    <div>
      <h1 className="mainheader"> Create TODO's</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="titlediv">
          <label className="title">Title : </label>
          <input
            value={input.title}
            className="titleinp"
            type="text"
            name="title"
            onChange={(e) => handleTitle(e)}
          />
        </div>
        <div className="titlediv">
          <label className="title">Description : </label>
          <textarea
            name="description"
            value={input.description}
            className="titleinp"
            type="text"
            onChange={(e) => handleTitle(e)}
          ></textarea>
        </div>
        <div className="dropdowndiv">
          <label className="statuslabel"> Status : </label>
          <select
            className="status"
            name="status"
            value={input.status}
            onChange={(e) => handleTitle(e)}
          >
            <option value="pending">pending</option>
            <option value="in-progress">in-progress</option>
            <option value="completed">completed</option>
          </select>
          <label className="prioritylabel"> Priority</label>
          <select
            value={input.priority}
            className="priority"
            name="priority"
            onChange={(e) => handleTitle(e)}
          >
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </div>
        <div className="buttondiv">
          <button
            className="addbutton"
            type="Submit"
            disabled={!isInputvalid()}
          >
            {edit === 1 ? "save" : "add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodosForm;
