import React from "react";
import "../TodoList/TodoList.css";

const TodosList = () => {
  return (
    <div>
      <h1>Please Find your TODO's List</h1>
      <div className="todolist">
        <div className="todotitle">title</div>
        <div className="todotitle">description</div>
        <button className="editbutton" type="button">
          Edit
        </button>
        <button className="deletebutton" type="button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodosList;
