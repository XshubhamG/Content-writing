# React query

```bash
$ npm install @tanstack/react-query
```

## Setting up react-query

- To set up React Query, we need to wrap our application in a QueryClientProvider and provide
  it with a QueryClient instance.

```ts
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient(); // new instance of QueryClient

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
```

Inside `main.tsx`

```ts
import { QueryProvider } from "./lib/react-query/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <App />
  </QueryProvider>
);
```

The QueryClient is the core of React Query. It handles caching, garbage collection, fetching,
and many other things.

## Core Concept of React Query

[Queries](https://tanstack.com/query/latest/docs/framework/react/guides/queries), [Mutations](https://tanstack.com/query/latest/docs/framework/react/guides/mutations) & [Query Invalidation](https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation) are the three core concept of react query.

## hooks

- React Query provides a set of hooks that you can use to fetch and update data in your components.
- for example: `useQuery`, `useMutation`, `useQueryClient` , `useInfiniteQuery` etc.

## Queries

A query is a declarative dependency on an asynchronous source of data that is tied to a unique key.
A query can be used with any Promise based method (including GET and POST methods) to fetch data
from a server.

To subscribe to query inside your components call the `useQuery` hook with atleast:

- A unique key for the query
- A function that returns a Promise with resolved data and errors.

```ts
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../appwrite/api";

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_CURRENT_USER],
    queryFn: getCurrentUser,
  });
};
```

The unique key you provide is used internally for refetching, caching, and sharing your queries
throughout your application.

The `useGetCurrentUser` function will return an object contains a few very important states
you'll need to be aware of to be productive.

- `isPending` or `status === 'pending'` - The query has no data yet.
- `isError` or `status === 'error'` - The query encountered an error.
- `isSuccess` or `status === 'success'` - The query was successful and data is available.
- If the query is in an `isSuccess` state, the `data` is available via the data property.

For most queries, it's usually sufficient to check for the `isPending` state, then the `isError` state,
then finally, assume that the `data` is available and render the successful state.

```ts
import { useGetCurrentUser } from "@/libs/react-query/queries&mutation";

export function UserCard() {
  const { data: user, isPending: isFetchingUser, isError } = useGetCurrentUser();

  if(isFetchingUser) {
    return <p>Loading...</p>;
  }

  return <section>
      <p>{user.name}</p>
      <img src={user.imageUrl} alt="profille">
  </section>;
}
```

## Mutation

Unlike queries, mutations are typically used to create/update/delete data or perform server side-effects.
For this purpose, TanStack Query exports a `useMutation` hook.

```ts
import { useMutation, useQueryClient } from "@/tanstack/react-query";
import { createPost } from "../appwrite/api";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: INewPost) => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
};
```

## Conclusion

React Query is a powerful tool for managing server state in your React applications. It abstracts the complexities of data fetching, caching, and synchronization, allowing you to focus on building your UI.
