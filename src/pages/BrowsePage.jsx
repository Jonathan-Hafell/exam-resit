import { useEffect, useState } from "react";
import { fetchGames } from "../api/getGames";
import "../styles/BrowsePage.scss";

const BrowsePage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGamesData = async () => {
      try {
        const { data } = await fetchGames();
        setGames(data);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGamesData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Games</h1>
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="game-item">
            <h2>{game.attributes.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowsePage;
