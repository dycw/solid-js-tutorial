import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [items, setItems] = createStore([
    { title: "test product", quantity: 2, id: 1000, price: 15 },
    { title: "test product2", quantity: 3, id: 1001, price: 18 },
  ]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
