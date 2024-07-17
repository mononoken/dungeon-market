import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/use-local-storage";
import { getRandomMonsters } from "../../monsters";
import { Monster } from "../../types/monster";
import { MonsterCard } from "./monster-card";
import styles from "./monster-index.module.css";

export function MonsterIndex() {
  const [monsters, setMonsters] = useLocalStorage("marketMonsters", []);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const fetchedMonsters = await getRandomMonsters(50);
        setMonsters(fetchedMonsters);
      } catch (error) {
        throw new Error("Error setting state.");
      }
    };

    if (monsters.length === 0) fetchMonsters();
  }, [monsters.length, setMonsters]);

  return (
    <div className="container">
      <h1>Monsters</h1>
      <ul className={styles.container}>
        {monsters.map((monster: Monster) => {
          return (
            <li key={monster.id}>
              <MonsterCard monster={monster} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
