import "./App.css";
import NavBar from "./state-management/NavBar";
import AuthProvider from "./state-management/Providers/AuthProvider";
import TasksProvider from "./state-management/tasks/TasksProvider";
import TaskList from "./state-management/tasks/TaskList";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <NavBar />
          <TaskList />
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
