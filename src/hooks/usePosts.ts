import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) =>
  useInfiniteQuery({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 1000,
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });

export default usePosts;

// ----------------------Pagination-------------------------
// import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import axios from "axios";
// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }

// interface PostQuery {
//   page: number;
//   pageSize: number;
// }

// const usePosts = (query: PostQuery) => {
//   const fetchPosts = () =>
//     axios
//       .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
//         params: {
//           _start: (query.page - 1) * query.pageSize,
//           _limit: query.pageSize,
//         },
//       })
//       .then((res) => res.data);

//   return useQuery({
//     queryKey: ["posts", query],
//     queryFn: fetchPosts,
//     staleTime: 10 * 1000,
//     placeholderData: keepPreviousData,
//   });
// };

// export default usePosts;
