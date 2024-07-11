import { Monster } from "../../types/monster";
import useCurrency from "../../hooks/useCurrency";

type MonsterCardProps = {
  monster: Monster;
};

function MonsterCard({ monster }: MonsterCardProps) {
  const { gold, silver } = useCurrency(monster.cr);

  return (
    <div>
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
    </div>
  );
}

export default MonsterCard;
