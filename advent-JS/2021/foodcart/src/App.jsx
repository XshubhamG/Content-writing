import Cart from "./components/Cart";
import Menu from "./components/Menu";

function App() {
  return (
    <main className="wrapper">
      <Menu heading="To Go Menu" />
      <Cart heading="Your Cart" />
    </main>
  );
}

export default App;
