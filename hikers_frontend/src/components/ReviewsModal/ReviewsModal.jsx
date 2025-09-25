import "./ReviewsModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const ReviewsModal = ({ isOpen, onAddItem, handleCloseClick }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  //   const [weather, setWeather] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      //   setWeather("");
    }
  }, [isOpen]); // watch the opening state

  const handleSubmit = () => {
    onAddItem({ name, imageUrl, weather });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  return (
    <ModalWithForm
      // buttonText="Add garment"
      title="New Trail Review"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      //   onSubmit={handleSubmit}
    >
      <label htmlFor="review-link-input" className="modal__label">
        Trail Image link
        <input
          type="url"
          id="review-link-input"
          className="modal__input"
          placeholder="Paste a link to a picture of your trail"
        />
        <span
          className="modal__input-error"
          id="review-link-input-error"
        ></span>
      </label>
      <label htmlFor="review-rating-input" className="modal__label">
        Rating
        <input
          type="number"
          max="5"
          min="1"
          id="review-rating-input"
          className="modal__input"
          placeholder="Rate the trail out of 5"
          required
        />
      </label>
      <fieldset className="modal__btn-cntnr">
        <legend className="modal__text">Select the difficulty:</legend>
        <div className="modal__radio-input">
          <input
            type="radio"
            id="easy"
            name="weatherCondition"
            value="easy"
            // checked={weather === "easy"}
            // onChange={handleSetWeather}
          />
          <label htmlFor="easy">Easy</label>
        </div>{" "}
        <div className="modal__radio-input">
          <input
            type="radio"
            id="moderate"
            name="weatherCondition"
            value="moderate"
            // checked={weather === "moderate"}
            // onChange={handleSetWeather}
          />
          <label htmlFor="moderate">Moderate</label>
        </div>{" "}
        <div className="modal__radio-input">
          <input
            type="radio"
            id="hard"
            name="weatherCondition"
            value="hard"
            // checked={weather === "hard"}
            // onChange={handleSetWeather}
          />
          <label htmlFor="hard">Hard</label>
        </div>
      </fieldset>

      <label htmlFor="review-input" className="modal__label">
        Review
        <input
          type="text"
          id="review-input"
          className="modal__input"
          placeholder="Type your review"
          required
          minLength="2"
          maxLength="150"
        />
        <span
          className="modal__input-error"
          id="review-caption-input-error"
        ></span>
      </label>

      <button type="submit" className="modal__save-button">
        Save
      </button>
    </ModalWithForm>
  );
};

export default ReviewsModal;
