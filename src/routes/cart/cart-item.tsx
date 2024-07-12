import { useState } from "react";

type CartItemProps = {
  item: { name: string };
};

function CartItem({ item }: CartItemProps) {
  const [quantity, setQuantity] = useState(0);

  const handleDecrementQuantity = () => {
    setQuantity(() => quantity - 1);
  };

  const handleIncrementQuantity = () => {
    setQuantity(() => quantity + 1);
  };

  return (
    <div>
      <div>{item.name}</div>
      <div>Quantity {quantity}</div>
      <div>
        <button onClick={handleDecrementQuantity}>-</button>
        <button onClick={handleIncrementQuantity}>+</button>
        {/* <button onClick={}>Delete</button> */}
      </div>
    </div>
  );
}

export default CartItem;
