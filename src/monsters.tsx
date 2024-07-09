export async function getMonsters() {
  const response = await fetch("https://api.open5e.com/monsters/?limit=10");

  if (!response) throw new Error("Fetch had an error.");

  return response.json();
}
