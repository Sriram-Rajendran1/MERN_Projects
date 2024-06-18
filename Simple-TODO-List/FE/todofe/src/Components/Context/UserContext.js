import { createContext, useState } from "react";

//creating contect API need 4 steps

//1. step-1 - create a context
const UserContext = createContext({});

//2. step-2 - provide the context

const UserContextProvider = ({ children }) => {
  //initilize states here

  const [input, setInput] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
  });

  const [data, setData] = useState([]);

  const [edit, setEdit] = useState(0);

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        input,
        setInput,
        edit,
        setEdit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
