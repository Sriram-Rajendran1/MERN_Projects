import { useContext } from "react";
import "../TodoList/TodoList.css";
import { UserContext } from "../Context/UserContext";

const TodosList = () => {
  const { data, setData, setInput, setEdit } = useContext(UserContext);

  const handleDelete = (indextodelete) => {
    const exceptedDeletedItem = data.filter(
      (item, index) => index !== indextodelete
    );
    setData(exceptedDeletedItem);
  };

  const handleEdit = (indextoedit) => {
    const updatedDataItem = data.find((item, index) => index === indextoedit);
    if (updatedDataItem) {
      handleDelete(indextoedit);
      setEdit(1);
      setInput({
        title: updatedDataItem.title,
        description: updatedDataItem.description,
        status: updatedDataItem.status,
        priority: updatedDataItem.priority,
      });
    }
  };

  return (
    <div>
      <h1>Please Find your TODO's List</h1>
      {data.map((item, index) => (
        <div key={index} className="todolist">
          <div className="todotitle">{item.title}</div>
          <div className="todotitle">{item.description}</div>
          <div className="todotitle">{item.status}</div>
          <div className="todotitle">{item.priority}</div>
          <button
            className="editbutton"
            type="button"
            onClick={() => handleEdit(index)}
          >
            Edit
          </button>
          <button
            className="deletebutton"
            type="button"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
