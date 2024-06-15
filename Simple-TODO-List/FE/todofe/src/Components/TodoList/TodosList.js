import { useContext } from "react";
import "../TodoList/TodoList.css";
import { UserContext } from "../Context/UserContext";

const TodosList = () => {
  const { data } = useContext(UserContext);

  return (
    <div>
      <h1>Please Find your TODO's List</h1>
      {data.map((item, index) => (
        <div key={index} className="todolist">
          <div className="todotitle">{item.title}</div>
          <div className="todotitle">{item.description}</div>
          <div className="todotitle">{item.status}</div>
          <div className="todotitle">{item.priority}</div>
          <button className="editbutton" type="button">
            Edit
          </button>
          <button className="deletebutton" type="button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
