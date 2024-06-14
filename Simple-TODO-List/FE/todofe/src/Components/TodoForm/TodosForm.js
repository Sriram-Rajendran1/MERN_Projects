import React from "react";
import "../TodoForm/TodoForm.css";

const TodosForm = () => {
  return (
    <div>
      <h1 className="mainheader"> Create TODO's</h1>
      <form className="form">
        <div className="titlediv">
          <label className="title">Title : </label>
          <input className="titleinp" type="text" />
        </div>
        <div className="titlediv">
          <label className="title">Description : </label>
          <textarea className="titleinp" type="text"></textarea>
        </div>
        <div className="dropdowndiv">
          <label className="statuslabel"> Status : </label>
          <select className="status" name="Status">
            <option value="pending" selected>
              pending
            </option>
            <option value="in-progress">in-progress</option>
            <option value="completed">completed</option>
          </select>
          <label className="prioritylabel"> Priority</label>
          <select className="priority" name="Priority">
            <option value="low">low</option>
            <option value="medium" selected>
              medium
            </option>
            <option value="high">high</option>
          </select>
        </div>
        <div className="buttondiv">
          <button className="addbutton" type="Submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodosForm;
