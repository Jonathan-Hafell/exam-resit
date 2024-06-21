import { API_BASE, API_GENRES, API_KEY } from "./constants";

export async function fetchGenres() {
  try {
    const response = await fetch(`${API_BASE}${API_GENRES}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch genres");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
}
