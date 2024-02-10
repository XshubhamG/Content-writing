# Routing in react in Oldway

## Install `react-router-dom`

```bash
npm install react-router-dom
```

## Setup the `BrowserRouter` inside main.tsx

```ts
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## Setup initial routes in the App.tsx

```ts
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
```

## Setup the Layout

```ts
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};
```

## Link

```ts
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
    </header>
  );
}
```

## NavLink

It works exactly like `Link` with some additional features like `isActive` to check if the currentlike
is active or not.

```ts
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink
        to="/"
        className={`${isActive ? "bg-purple-400" : ""} text-[18px] font-bold`}
      >
        Home
      </NavLink>
    </header>
  );
}
```
