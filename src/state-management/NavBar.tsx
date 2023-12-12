import { useContext } from "react";
import LoginStatus from "./LoginStatus";
import TasksContexts from "./tasks/tasksContext";

const NavBar = () => {
  const { tasks } = useContext(TasksContexts);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
