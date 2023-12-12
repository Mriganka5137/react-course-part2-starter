import { useReducer } from "react";
import "./App.css";
import TaskList from "./state-management/TaskList";
import { tasksReducer } from "./state-management/reducers/tasksReducer";
import TasksContexts from "./state-management/context/tasksContext";
import NavBar from "./state-management/NavBar";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <TasksContexts.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <TaskList />
      </TasksContexts.Provider>
    </>
  );
}

export default App;
