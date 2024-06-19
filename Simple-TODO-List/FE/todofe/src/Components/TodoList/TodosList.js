import { useContext, useEffect } from "react";
import "../TodoList/TodoList.css";
import { UserContext } from "../Context/UserContext";

const TodosList = () => {
  const { data, setData, setInput, setEdit } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/gettodos")
      .then((response) => {
        if (!response) {
          throw console.error(`Networkresponse not OK`);
        }
        return response.json();
      })
      .then((datas) => {
        console.log(datas.data.getdata);
        setData(datas.data.getdata);
      })
      .catch((err) => {
        console.log("error in display");
      });
  }, [setData]);

  const handleDelete = async (indextodelete) => {
    try {
      console.log(indextodelete);
      console.log(typeof indextodelete);
      const deleteItem = await fetch(
        `http://localhost:4000/api/v1/deletetodo/${indextodelete}`,
        {
          method: "DELETE",
        }
      );

      if (deleteItem.status === 202) {
        const idToDelete = String(indextodelete);

        const exceptedDeletedItem = data.filter(
          (item, index) => item._id !== idToDelete
        );
        setData(exceptedDeletedItem);
      } else if (deleteItem.status === 404) {
        console.log("Item not found");
      } else {
        console.log("Server Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (indextoedit) => {
    try {
      console.log(indextoedit);
      const updateDataItem = await fetch(
        `http://localhost:4000/api/v1/updatetodo/${indextoedit}`,
        {
          method: "PATCH",
        }
      );

      if (updateDataItem.status === 202) {
        const idToEdit = String(indextoedit);

        const updatedItem = data.find((item, index) => item._id === idToEdit);
        if (updatedItem) {
          handleDelete(idToEdit);
          setEdit(1);
          setInput({
            title: updatedItem.title,
            description: updatedItem.description,
            status: updatedItem.status,
            priority: updatedItem.priority,
          });
        }
      } else if (updateDataItem.status === 500) {
        console.log("server error");
      }
    } catch (error) {
      console.log(error);
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
            onClick={() => handleEdit(item._id)}
          >
            Edit
          </button>
          <button
            className="deletebutton"
            type="button"
            onClick={() => handleDelete(item._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
