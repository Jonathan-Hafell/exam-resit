import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchGameById } from "../api/getGamesById";
import "../styles/GamesDetailPage.scss";
import BreadcrumbComponent from "../components/Breadcrumb";
import { addToCart, removeFromCart, isInCart } from "../utils/createCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faSpinner,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";

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

  const breadcrumbs = [
    { label: "Browse", path: "/browse", active: false },
    {
      label: game ? game.attributes.title : "Loading...",
      path: `/details/${id}`,
      active: true,
    },
  ];

  const handleCartClick = () => {
    if (isInCart(game.id)) {
      removeFromCart(game.id);
    } else {
      addToCart(game);
    }
    setGame({ ...game });
  };

  if (loading) {
    return (
      <div className="spinner">
        <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!game) {
    return <div>No game details found</div>;
  }

  return (
    <div className="game-detail-container">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} />
      <div className="game-detail">
        <h1 className="mb-2">{game.attributes.title}</h1>
        <div className="img-container">
          <img
            src={game.attributes.image.data.attributes.url}
            alt={game.attributes.title}
            className="game-detail-img img-fluid"
          />
          <button className="heart-btn" onClick={handleCartClick}>
            <FontAwesomeIcon
              icon={isInCart(game.id) ? solidHeart : regularHeart}
            />
          </button>
        </div>

        <p>
          <strong>Description:</strong> {game.attributes.description}
        </p>
        <p>
          <strong>Price:</strong> {game.attributes.price} Kr
        </p>
        <p>
          <strong>Platform:</strong> {game.attributes.platform}
        </p>
        <p>
          <strong>Developer:</strong> {game.attributes.developer}
        </p>
        <p>
          <strong>Release Date:</strong> {game.attributes.releaseDate}
        </p>
      </div>
    </div>
  );
};

export default GamesDetailPage;
