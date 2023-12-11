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

type Action = AddAction | DeleteAction;

export const tasksReducer = (tasks: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "ADD":
      return [{ id: Date.now(), title: "Task " + Date.now() }, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};
