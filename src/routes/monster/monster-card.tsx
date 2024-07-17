import { Monster } from "../../types/monster";
import { useCurrency } from "../../hooks/use-currency";
import styles from "./monster-card.module.css";

type MonsterCardProps = {
  monster: Monster;
  onAddToCart: () => void;
};

export function MonsterCard({ monster, onAddToCart }: MonsterCardProps) {
  const { gold, silver } = useCurrency(monster.cr);

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
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  );
}
