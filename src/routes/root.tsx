import { useState, createContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartItemType } from "../types/cart-item";
import Cart from "./cart/cart";
import "./root.css";

export const CartItemsContext = createContext<{
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
}>({
  cartItems: [],
  setCartItems: () => {},
});

function Root() {
  const [cartItems, setCartItems] = useState([
    { name: "baa", quantity: 0 },
    { name: "ram", quantity: 2 },
    { name: "ewe", quantity: 0 },
  ]);

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      <h1>Dungeon Market</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/monsters/">Shop</Link>
          </li>
          <li>
            <Link to="/cart/">
              <Cart />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </CartItemsContext.Provider>
  );
}

export default Root;
