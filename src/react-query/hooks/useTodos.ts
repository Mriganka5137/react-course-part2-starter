import { useQuery } from "@tanstack/react-query";
import { CACHE_TODO_KEY } from "./constants";
import todoService from "../services/todoService";

const useTodos = () => {
  return useQuery({
    queryKey: CACHE_TODO_KEY,
    queryFn: todoService.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
