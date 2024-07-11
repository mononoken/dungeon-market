import { Monster } from "../../types/monster";

type MonsterCardProps = {
  monster: Monster;
};

function MonsterCard({ monster }: MonsterCardProps) {
  // Should this logic be moved to a class or module?
  const goldWorth = monster.cr * 300 ? monster.cr * 300 : 0.5;
  const gold = Math.floor(goldWorth);
  const silverChange = (goldWorth % 1) * 100;
  const silver = Math.floor(silverChange);

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
