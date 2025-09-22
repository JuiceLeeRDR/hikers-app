import "./TrailsCardModal.css";
import mwfclosebtn from "../../assets/mwfclosebtn.svg";

const TrailsCardModal = ({
  name,
  difficulty,
  distance,
  city,
  handleCloseClick,
}) => {
  return (
    <div className="trail-card__modal">
      <div className="trail-card__content">
        <button
          onClick={handleCloseClick}
          className="trail-card__modal__close-button"
          type="button"
        >
          <img
            src={mwfclosebtn}
            alt="Modal close button"
            className="trail-card__modal__close-button"
          />
        </button>
        <h2 className="trail-name">{name}</h2>
        <p className="trail-card__text">Difficulty: {difficulty}</p>
        <p className="trail-card__text">Distance: {distance}</p>
        <p className="trail-card__text">City: {city}</p>
      </div>
    </div>
  );
};

export default TrailsCardModal;
