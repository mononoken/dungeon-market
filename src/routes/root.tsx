import { createContext } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { Outlet } from "react-router-dom";
import { CartItemType } from "../types/cart-item";
import { Nav } from "./nav";
import "./root.css";

export const CartItemsContext = createContext<{
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
}>({
  cartItems: [],
  setCartItems: () => {},
});

export function Root() {
  const [cartItems, setCartItems] = useLocalStorage("userCartItems", []);

  const monsterCount: number = cartItems.reduce(
    (total: number, item: CartItemType) => (total += item.quantity),
    0,
  );

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      <header>
        <h1>Dungeon Market</h1>
        <Nav monsterCount={monsterCount} />
      </header>
      <Outlet />
      <footer>Github</footer>
    </CartItemsContext.Provider>
  );
}
