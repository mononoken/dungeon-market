import { useContext } from "react";
import { useCurrency } from "../../hooks/use-currency";
import { CartItem } from "./cart-item";
import { CartItemsContext } from "../root";
import { CartItemType } from "../../types/cart-item";

export function Cart() {
  const { cartItems } = useContext(CartItemsContext);

  const crTotal: number = cartItems.reduce(
    (total: number, item: CartItemType) => (total += item.cr * item.quantity),
    0,
  );

  const { gold, silver } = useCurrency(crTotal);

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
      <div>Total Cost: {`${gold}g ${silver}s`}</div>
      <button disabled>Checkout</button>
    </>
  );
}
