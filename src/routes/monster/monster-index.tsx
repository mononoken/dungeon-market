import { useContext, useEffect, useState } from "react";
import { getRandomMonsters } from "../../monsters";
import { Monster } from "../../types/monster";
import { MonsterCard } from "./monster-card";
import { CartItemsContext } from "../root";

export function MonsterIndex() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
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
    fetchMonsters();
  }, []);

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
        updatedItems.push({ name: monster.name, quantity: 1 });
      }

      return updatedItems;
    });
  };

  return (
    <>
      <h2>Monsters</h2>
      <ul>
        {monsters.map((monster: Monster) => {
          return (
            <li key={monster.id}>
              <MonsterCard monster={monster} />
              <button onClick={() => addToCart(monster)}>Add to cart</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
