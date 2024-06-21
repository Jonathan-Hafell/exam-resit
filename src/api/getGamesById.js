import { API_BASE, API_GAMES, API_KEY } from "./constants";

export async function fetchGameById(id) {
  try {
    const response = await fetch(`${API_BASE}${API_GAMES}/${id}?populate=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response data:", errorData);
      throw new Error("Failed to fetch game details");
    }

    const data = await response.json();
    console.log(data.data);
    return data;
  } catch (error) {
    console.error("Error fetching game details:", error);
    throw error;
  }
}
