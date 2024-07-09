import { useEffect, useState } from "react";
import { getMonsters } from "../../monsters";

function MonsterIndex() {
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const monsters = await getMonsters();
        const monsterNames = monsters.results.map(
          (monster: { name: string }) => monster.name,
        );
        setMonsters(monsterNames);
      } catch (error) {
        throw new Error("Error setting state.");
      }
    };
    fetchMonsters();
  }, []);

  return (
    <>
      <h2>Monsters</h2>
      <ul>
        {monsters.map((monster) => {
          return <li>{monster}</li>;
        })}
      </ul>
    </>
  );
}

export default MonsterIndex;
