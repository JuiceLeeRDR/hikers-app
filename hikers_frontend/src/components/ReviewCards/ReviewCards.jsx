import "./ReviewCards.css";
import trailreview1 from "../../assets/trailreview1.jpg";
import trailreview2 from "../../assets/trailreview2.jpg";
import trailreview3 from "../../assets/trailreview3.jpg";

function ReviewCards() {
  return (
    <div className="review__cntnr">
      <li className="review-card">
        <div className="review-card__info-container">
          <h2 className="review-card__text">
            Vietnam Veterans Park Trail Review
          </h2>
        </div>
        <img className="review-card__image" src={trailreview1} alt="" />
        <p className="review-card__info">Rating: 5/5</p>
        <p className="review-card__info">Difficulty: easy</p>
        <p className="review-card__info">Great sceneray with a short walk</p>
      </li>
      <li className="review-card">
        <div className="review-card__info-container">
          <h2 className="review-card__text">Crowders Mountain Review</h2>
        </div>
        <img className="review-card__image" src={trailreview2} alt="" />
        <p className="review-card__info">Rating: 5/5</p>
        <p className="review-card__info">Difficulty: intermediate</p>
        <p className="review-card__info">
          Great sceneray with a challenging walk
        </p>
      </li>
      <li className="review-card">
        <div className="review-card__info-container">
          <h2 className="review-card__text">Crowders Mountain Review</h2>
        </div>
        <img className="review-card__image" src={trailreview3} alt="" />
        <p className="review-card__info">Rating: 5/5</p>
        <p className="review-card__info">Difficulty: intermediate</p>
        <p className="review-card__info">
          Great sceneray with a challenging walk
        </p>
      </li>
    </div>
  );
}

export default ReviewCards;
