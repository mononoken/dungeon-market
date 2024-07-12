import { useState } from "react";
import CartItem from "./cart-item";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { name: "foo", quantity: 0 },
    { name: "bar", quantity: 2 },
  ]);

  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((cartItem) => {
          return (
            <li key={cartItem.name}>
              <CartItem item={cartItem} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Cart;
