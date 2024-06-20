import { API_BASE, API_GAMES, API_KEY } from "./constants";

export async function fetchGames() {
  try {
    const response = await fetch(`${API_BASE}${API_GAMES}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response data:", errorData);
      throw new Error("Failed to fetch games");
    }

    const data = await response.json();
    console.log(data.data);
    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
}
