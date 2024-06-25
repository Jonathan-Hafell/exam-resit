import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchGameById } from "../api/getGamesById";
import "../styles/GamesDetailPage.scss";
import { addToCart, removeFromCart, isInCart } from "../utils/createCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

const GamesDetailPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const gameData = await fetchGameById(id);
        setGame(gameData.data);
      } catch (error) {
        setError("Failed to fetch game details");
        console.error("Error fetching game details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  const handleCartClick = () => {
    if (isInCart(game.id)) {
      removeFromCart(game.id);
    } else {
      addToCart(game);
    }
    setGame({ ...game }); // Trigger re-render
  };

  if (loading) {
    return <div className="spinner">Loading...</div>; // Use your spinner component here
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!game) {
    return <div>No game details found</div>;
  }

  return (
    <div className="game-detail-container p-5">
      <div className="game-detail">
        <h1 className="mb-2">{game.attributes.title}</h1>
        <img
          src={game.attributes.image.data.attributes.url}
          alt={game.attributes.title}
          className="img-fluid mb-4"
        />
        <p>{game.attributes.description}</p>
        <p>
          <strong>Platform:</strong> {game.attributes.platform}
        </p>
        <p>
          <strong>Developer:</strong> {game.attributes.developer}
        </p>
        <p>
          <strong>Release Date:</strong> {game.attributes.releaseDate}
        </p>
        <button className="heart-btn" onClick={handleCartClick}>
          <FontAwesomeIcon
            icon={isInCart(game.id) ? solidHeart : regularHeart}
          />
        </button>
      </div>
    </div>
  );
};

export default GamesDetailPage;
