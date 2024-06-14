import "./App.css";
import TodosForm from "./Components/TodoForm/TodosForm";
import TodosList from "./Components/TodoList/TodosList";

function App() {
  return (
    <div className="App">
      <h1>Welcome to your TODO's Application</h1>
      <TodosForm />
      <TodosList />
    </div>
  );
}

export default App;
