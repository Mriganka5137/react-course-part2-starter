import "./App.css";
import NavBar from "./state-management/NavBar";
import { AuthProvider } from "./state-management/auth";
import { TasksProvider, TaskList } from "./state-management/tasks";

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
