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

  const [data, setData] = useState([
    {
      title: "test-80",
      description: "this is a test message",
      status: "completed",
      priority: "high",
    },
  ]);

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        input,
        setInput,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
