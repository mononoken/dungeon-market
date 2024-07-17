import { useContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { Monster } from "../../types/monster";
import { useCurrency } from "../../hooks/use-currency";
import { CartItemsContext } from "../root";
import { CartItemType } from "../../types/cart-item";
import styles from "./monster-card.module.css";

type MonsterCardProps = {
  monster: Monster;
};

const addToCart = (
  setCartItems: Dispatch<SetStateAction<CartItemType[]>>,
  monster: Monster,
  quantity: number = 1,
) => {
  setCartItems((prevItems: CartItemType[]) => {
    let found = false;
    const updatedItems = prevItems.map((item) => {
      if (item.name === monster.name) {
        found = true;
        return { ...item, quantity: item.quantity + quantity };
      }
      return item;
    });

    if (!found) {
      updatedItems.push({
        name: monster.name,
        cr: monster.cr,
        quantity: quantity,
      });
    }

    return updatedItems;
  });
};

export function MonsterCard({ monster }: MonsterCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { gold, silver } = useCurrency(monster.cr);
  const { setCartItems } = useContext(CartItemsContext);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToCart(setCartItems, monster, quantity);
  };

  return (
    <div className={styles.card}>
      <h1>{monster.name}</h1>
      <ul>
        <li>
          <span>Cost: </span>
          {gold ? <span>{`${gold}g`}</span> : null}
          {silver ? <span>{`${silver}s`}</span> : null}
        </li>
        <li>
          <span>Size:</span> {monster.size}
        </li>
        <li>
          <span>Type:</span> {monster.type}
        </li>
        <li>
          <span>Armor Class:</span> {monster.armorClass}
        </li>
        <li>{monster.desc || "No description available."} </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor={`${monster.name}-quantity`}>Quantity:</label>
        <input
          id={`${monster.name}-quantity`}
          type="number"
          min="1"
          value={quantity}
          onInput={handleQuantityChange}
        />
        <button type="submit">Add to cart</button>
      </form>
    </div>
  );
}
