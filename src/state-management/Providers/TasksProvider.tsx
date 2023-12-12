import React, { ReactNode, useReducer } from "react";
import { tasksReducer } from "../reducers/tasksReducer";
import TasksContexts from "../context/tasksContext";

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContexts.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContexts.Provider>
  );
};

export default TasksProvider;
