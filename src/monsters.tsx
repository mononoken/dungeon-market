import { Monster } from "./types/monster";

type ImportedMonster = {
  id: number;
  name: string;
  desc: string;
  size: string;
  type: string;
  armor_class: number;
  cr: number;
};

async function getMonsters(key: string = "monsterStorage"): Promise<Monster[]> {
  const storedMonsters = JSON.parse(localStorage.getItem(key) ?? "null");
  if (storedMonsters) return storedMonsters;

  const response = await fetch(
    "https://api.open5e.com/monsters/?document__slug=wotc-srd&limit=400",
  );

  if (!response) {
    throw new Error("There was an error fetching monsters from the API.");
  }

  const data = await response.json();

  const parsedMonsters = data.results.map(
    (monster: ImportedMonster, index: number) => {
      return {
        id: index + 1,
        name: monster.name,
        desc: monster.desc,
        size: monster.size,
        type: monster.type,
        armorClass: monster.armor_class,
        cr: monster.cr,
      };
    },
  );

  localStorage.setItem(key, JSON.stringify(parsedMonsters));

  return parsedMonsters;
}

export async function getRandomMonsters(quantity: number): Promise<Monster[]> {
  return getRandomEntries(await getMonsters(), quantity);
}

function getRandomEntries<T>(array: T[], quantity: number): T[] {
  if (quantity > array.length) {
    throw new Error("Requested quantity exceeds array length.");
  }

  const result = new Set<number>();

  while (result.size < quantity) {
    const randomIndex = Math.floor(Math.random() * array.length);
    result.add(randomIndex);
  }

  return Array.from(result).map((index) => array[index]);
}
