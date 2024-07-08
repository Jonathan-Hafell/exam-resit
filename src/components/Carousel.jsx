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
          <img
            src={game1}
            srcSet={`${game1_small} 480w, ${game1_medium} 800w, ${game1_large} 1200w, ${game1} 1920w`}
            sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, (max-width: 1400px) 1200px, 1920px"
            className="d-block w-100 h-100 img-fluid"
            alt="game1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={game2}
            srcSet={`${game2_small} 480w, ${game2_medium} 800w, ${game2_large} 1200w`}
            sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, 1200px"
            className="d-block w-100 h-100 img-fluid"
            alt="game1"
          />
        </div>
        <div className="carousel-item active">
          <img
            src={game3}
            srcSet={`${game3_small} 480w, ${game3_medium} 800w, ${game3_large} 1200w`}
            sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, 1200px"
            className="d-block w-100 h-100 img-fluid"
            alt="game1"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
