import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_TODO_KEY } from "./constants";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchData = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery({
    queryKey: CACHE_TODO_KEY,
    queryFn: fetchData,
    staleTime: 10 * 1000,
  });
};

export default useTodos;