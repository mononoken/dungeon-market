import { useContext } from "react";
import { CartItemType } from "../../types/cart-item";
import { CartItemsContext } from "../root";

type CartItemProps = {
  item: CartItemType;
};

export function CartItem({ item }: CartItemProps) {
  const { setCartItems } = useContext(CartItemsContext);

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
    <div>
      <div>{item.name}</div>
      <div>Quantity {item.quantity}</div>
      <div>
        <button onClick={handleDecrementQuantity}>-</button>
        <button onClick={handleIncrementQuantity}>+</button>
        <button onClick={handleRemoveItem}>Remove</button>
      </div>
    </div>
  );
}
