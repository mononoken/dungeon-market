import { useContext } from "react";
import { useCurrency } from "../../hooks/use-currency";
import { Link } from "react-router-dom";
import { CartItem } from "./cart-item";
import { CartItemsContext } from "../root";
import { CartItemType } from "../../types/cart-item";
import styles from "./cart.module.css";

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
    <div className={styles.container}>
      <h1>Cart</h1>
      <ul className="container">
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
      <Link to="/cart/">Cart</Link>
      <button disabled>Checkout</button>
    </div>
  );
}
