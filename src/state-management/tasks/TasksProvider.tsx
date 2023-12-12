import React, { ReactNode, useReducer } from "react";
import TasksContexts from "./tasksContext";

interface Props {
  children: ReactNode;
}

export interface Task {
  id: number;
  title: string;
}

interface AddAction {
  type: "ADD";
  task: Task;
}

interface DeleteAction {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddAction | DeleteAction;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [{ id: Date.now(), title: "Task " + Date.now() }, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContexts.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContexts.Provider>
  );
};

export default TasksProvider;
