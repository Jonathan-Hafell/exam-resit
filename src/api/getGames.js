import { API_BASE, API_GAMES, API_KEY } from "./constants";

export async function fetchGames() {
  try {
    const response = await fetch(`${API_BASE}${API_GAMES}?populate=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
}
