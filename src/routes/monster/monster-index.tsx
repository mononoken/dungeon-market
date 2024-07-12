import { useContext, useEffect, useState } from "react";
import { getRandomMonsters } from "../../monsters";
import { Monster } from "../../types/monster";
import MonsterCard from "./monster-card";
import { CartItemsContext } from "../root";

function MonsterIndex() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const { setCartItems } = useContext(CartItemsContext);

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

  const addToCart = (monster: Monster) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === monster.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === monster.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevItems, { name: monster.name, quantity: 1 }];
      }
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

export default MonsterIndex;
