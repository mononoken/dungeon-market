import { useContext } from "react";
import { CartItem } from "./cart-item";
import { CartItemsContext } from "../root";
import { CartItemType } from "../../types/cart-item";

export function Cart() {
  const { cartItems } = useContext(CartItemsContext);

  const monsterCount: number = cartItems.reduce(
    (total: number, item: CartItemType) => (total += item.quantity),
    0,
  );

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
      <div>Total Monsters: {monsterCount}</div>
    </>
  );
}
