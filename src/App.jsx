import { A, Route, Routes } from "@solidjs/router";
import { createSignal } from "solid-js";
import banner from "./assets/banner.png";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

export default function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  const toggleTheme = () => {
    setDarkTheme((theme) => !theme);
  };

  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{ "bg-neutral-900": darkTheme(), "text-white": darkTheme() }}
      >
        <span
          class="material-symbols-outlined cursor-pointer"
          onclick={toggleTheme}
        >
          light_mode
        </span>
        <h1>Ninja Merch</h1>
        <A href="/">Home</A>
        <A href="/cart">Cart</A>
      </header>

      <img class="rounded-md" src={banner} alt="site banner" />

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Routes>
    </div>
  );
}
