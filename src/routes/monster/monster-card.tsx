import { Monster } from "../../types/monster";
import { useCurrency } from "../../hooks/use-currency";

type MonsterCardProps = {
  monster: Monster;
  onAddToCart: () => void;
};

export function MonsterCard({ monster, onAddToCart }: MonsterCardProps) {
  const { gold, silver } = useCurrency(monster.cr);

  return (
    <div className={"card"}>
      <h1>{monster.name}</h1>
      <div>
        <span>Cost: </span>
        {gold ? <span>{`${gold}g`}</span> : null}
        {silver ? <span>{`${silver}s`}</span> : null}
      </div>
      <ul>
        <li>Size: {monster.size}</li>
        <li>Type: {monster.type}</li>
        <li>Armor Class: {monster.armorClass}</li>
      </ul>
      <p>{monster.desc ? monster.desc : "No description available."}</p>
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  );
}
