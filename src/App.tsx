import "./App.css";
import NavBar from "./state-management/NavBar";
import Counter from "./state-management/counter/Counter";
import { TaskList, TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <>
      <TasksProvider>
        <Counter />
        <NavBar />
        <TaskList />
      </TasksProvider>
    </>
  );
}

export default App;
