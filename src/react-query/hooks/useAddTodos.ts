import { useQueryClient, useMutation } from "@tanstack/react-query";
import { CACHE_TODO_KEY } from "./constants";
import APIClient from "../services/apiClient";
import todoService, { Todo } from "../services/todoService";
APIClient;

const apiClient = new APIClient<Todo>("/todos");

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodos = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,

    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_TODO_KEY) || [];
      queryClient.setQueryData<Todo[]>(CACHE_TODO_KEY, (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      onAdd();
      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      // APPROACH: 1 - Invalidating the Cache
      // queryClient.invalidateQueries({
      //   queryKey: CACHE_TODO_KEY,
      // });
      // APPROACH 2: Updating the data in the cache
      queryClient.setQueryData<Todo[]>(CACHE_TODO_KEY, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_TODO_KEY, context.previousTodos);
    },
  });
};

export default useAddTodos;
