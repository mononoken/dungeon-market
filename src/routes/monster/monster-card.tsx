import { useContext } from "react";
import { Monster } from "../../types/monster";
import { useCurrency } from "../../hooks/use-currency";
import { CartItemsContext } from "../root";
import styles from "./monster-card.module.css";

type MonsterCardProps = {
  monster: Monster;
};

export function MonsterCard({ monster }: MonsterCardProps) {
  const { gold, silver } = useCurrency(monster.cr);
  const { setCartItems } = useContext(CartItemsContext);

  const addToCart = (monster: Monster) => {
    setCartItems((prevItems) => {
      let found = false;
      const updatedItems = prevItems.map((item) => {
        if (item.name === monster.name) {
          found = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      if (!found) {
        updatedItems.push({ name: monster.name, cr: monster.cr, quantity: 1 });
      }

      return updatedItems;
    });
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
      <button onClick={() => addToCart(monster)}>Add to cart</button>
      <form>
        <input type="number" value={1} />
      </form>
    </div>
  );
}
