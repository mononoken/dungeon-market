import { useContext } from "react";
import { CartItem } from "./cart-item";
import { CartItemsContext } from "../root";

export function Cart() {
  const { cartItems } = useContext(CartItemsContext);

  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.name}>
              <CartItem item={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
