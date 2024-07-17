import { useContext } from "react";
import { useCurrency } from "../../hooks/use-currency";
import { CartItemType } from "../../types/cart-item";
import { CartItemsContext } from "../root";
import styles from "./cart-item.module.css";

type CartItemProps = {
  item: CartItemType;
};

export function CartItem({ item }: CartItemProps) {
  const { setCartItems } = useContext(CartItemsContext);
  const { gold, silver } = useCurrency(item.quantity * item.cr);

  const handleDecrementQuantity = () => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: Math.max(0, cartItem.quantity - 1) }
          : cartItem,
      ),
    );
  };

  const handleIncrementQuantity = () => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    );
  };

  const handleRemoveItem = () => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.name !== item.name),
    );
  };

  return (
    <div className={styles.card}>
      <ul>
        <li>
          <h2>{item.name}</h2>
        </li>
        <li>
          <span>Quantity</span> {item.quantity}
        </li>
        <li>
          <span>Cost</span> {`${gold}g ${silver}s`}
        </li>
      </ul>
      <div className="buttons">
        <button onClick={handleDecrementQuantity}>-</button>
        <button onClick={handleIncrementQuantity}>+</button>
        <button onClick={handleRemoveItem}>Remove</button>
      </div>
    </div>
  );
}
