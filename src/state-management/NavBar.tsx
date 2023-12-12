import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TasksContexts from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { counter } = useCounterStore();
  const { tasks } = useContext(TasksContexts);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
