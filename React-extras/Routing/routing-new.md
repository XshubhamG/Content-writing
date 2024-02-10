# Routing in React in NewWay

## Adding Router

[src/index.ts]

```ts
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowerRouter([
    {
        
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}>
  </React.StrictMode>
);
```
