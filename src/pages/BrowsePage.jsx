import { useState, useEffect } from "react";
import { fetchGames } from "../api/getGames";
import { fetchGenres } from "../api/getGenres";
import "../styles/BrowsePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BrowsePage = () => {
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genresData = await fetchGenres();
        setGenres(genresData.data);

        const gamesData = await fetchGames();
        setGames(gamesData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleGenreClick = async (genreId) => {
    setLoading(true);
    setSelectedGenre(genreId);
    try {
      const gamesData = await fetchGames();
      const filteredGames = genreId
        ? gamesData.data.filter((game) =>
            game.attributes.genres.data.some((genre) => genre.id === genreId)
          )
        : gamesData.data;
      setGames(filteredGames);
    } catch (error) {
      console.error("Error fetching games:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="spinner">
        <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      </div>
    );
  }

  return (
    <div className="browse-page mx-auto my-5">
      <div className="d-flex justify-content-between">
        <ul className="nav nav-pills genres">
          <li className="nav-item">
            <button
              className={`nav-link ${selectedGenre === null ? "active" : ""}`}
              href="#"
              onClick={() => handleGenreClick(null)}
            >
              All
            </button>
          </li>
          {genres.map((genre) => (
            <li className="nav-item mr-1" key={genre.id}>
              <button
                className={`nav-link ${
                  selectedGenre === genre.id ? "active" : ""
                }`}
                href="#"
                onClick={() => handleGenreClick(genre.id)}
              >
                {genre.attributes.name}
              </button>
            </li>
          ))}
        </ul>
        <Link to="/cart" className="btn btn-primary view-cart-button">
          View Cart
        </Link>
      </div>

      <div className="card-container mt-4">
        {games.map((game) => (
          <div className="card" key={game.id}>
            <img
              src={`${game.attributes.image.data.attributes.url}`}
              className="card-img-top"
              alt={game.attributes.title}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title mb-2">{game.attributes.title}</h5>
              <p className="card-text">Platform: {game.attributes.platform}</p>
              <Link
                to={`/details/${game.id}`}
                className="btn btn-primary mt-auto align-self-start"
              >
                More info
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowsePage;
