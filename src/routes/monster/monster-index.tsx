import { useEffect, useState } from "react";
import { getRandomMonsters } from "../../monsters";
import { Monster } from "../../types/monster";
import MonsterCard from "./monster-card";

function MonsterIndex() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const fetchedMonsters = await getRandomMonsters(8);
        setMonsters(fetchedMonsters);
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
        {monsters.map((monster: Monster) => {
          return (
            <li key={monster.id}>
              <MonsterCard monster={monster} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MonsterIndex;
