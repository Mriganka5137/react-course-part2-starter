import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { CACHE_TODO_KEY } from "./constants";

const apiClient = new APIClient<Todo>("/todos");

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  return useQuery({
    queryKey: CACHE_TODO_KEY,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
