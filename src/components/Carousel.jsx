import game1 from "../assets/images/game1.jpg";
import game2 from "../assets/images/game2.jpg";
import game3 from "../assets/images/game3.jpg";
import game1_small from "../assets/images/game1_small.jpg";
import game2_small from "../assets/images/game2_small.jpg";
import game3_small from "../assets/images/game3_small.jpg";
import game1_medium from "../assets/images/game1_medium.jpg";
import game2_medium from "../assets/images/game2_medium.jpg";
import game3_medium from "../assets/images/game3_medium.jpg";
import game1_large from "../assets/images/game1_large.jpg";
import game2_large from "../assets/images/game2_large.jpg";
import game3_large from "../assets/images/game3_large.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="active"
          aria-current="true"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <picture>
            <source media="(max-width: 480px)" srcSet={game1_small} />
            <source media="(max-width: 800px)" srcSet={game1_medium} />
            <source media="(max-width: 1200px)" srcSet={game1_large} />
            <img src={game1} className="carousel-img" alt="game1" />
          </picture>
        </div>

        <div className="carousel-item">
          <picture>
            <source media="(max-width: 480px)" srcSet={game2_small} />
            <source media="(max-width: 800px)" srcSet={game2_medium} />
            <source media="(max-width: 1200px)" srcSet={game2_large} />
            <img src={game2} className="carousel-img" alt="game2" />
          </picture>
        </div>
        <div className="carousel-item active">
          <picture>
            <source media="(max-width: 480px)" srcSet={game3_small} />
            <source media="(max-width: 800px)" srcSet={game3_medium} />
            <source media="(max-width: 1200px)" srcSet={game3_large} />
            <img src={game3} className="carousel-img" alt="game2" />
          </picture>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="carousel-control-prev-icon"
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className="carousel-control-next-icon"
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
