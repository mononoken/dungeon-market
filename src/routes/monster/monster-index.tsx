import { useContext, useEffect } from "react";
import { useLocalStorage } from "../../hooks/use-local-storage";
import { getRandomMonsters } from "../../monsters";
import { Monster } from "../../types/monster";
import { MonsterCard } from "./monster-card";
import { CartItemsContext } from "../root";
import styles from "./monster-index.module.css";

export function MonsterIndex() {
  const [monsters, setMonsters] = useLocalStorage("marketMonsters", []);
  const { setCartItems } = useContext(CartItemsContext);

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
    <div className="container">
      <h1>Monsters</h1>
      <ul className={styles.container}>
        {monsters.map((monster: Monster) => {
          return (
            <li key={monster.id}>
              <MonsterCard
                monster={monster}
                onAddToCart={() => addToCart(monster)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
