import "./Reviews.css";

function Reviews() {
  return (
    <div className="review__cntnr">
      <li className="review-card">
        <div className="review-card__info-container">
          <h2 className="review-card__text">Trail Review</h2>
          {/* <button className="item__likebtn" type="button">
          <img
            src={likeBtn}
            alt="like button"
            className={itemLikeButtonClassName}
          />
        </button> */}
        </div>
        <img
          // onClick={handleItemCardClick}
          className="review-card__image"
          src=""
          alt=""
        />
      </li>
      <li className="review-card">
        <div className="review-card__info-container">
          <h2 className="review-card__text">Trail Review</h2>
          {/* <button className="item__likebtn" type="button">
          <img
            src={likeBtn}
            alt="like button"
            className={itemLikeButtonClassName}
          />
        </button> */}
        </div>
        <img
          // onClick={handleItemCardClick}
          className="review-card__image"
          src=""
          alt=""
        />
      </li>
      <li className="review-card">
        <div className="review-card__info-container">
          <h2 className="review-card__text">Trail Review</h2>
          {/* <button className="item__likebtn" type="button">
          <img
            src={likeBtn}
            alt="like button"
            className={itemLikeButtonClassName}
          />
        </button> */}
        </div>
        <img
          // onClick={handleItemCardClick}
          className="review-card__image"
          src=""
          alt=""
        />
      </li>
    </div>
  );
}

export default Reviews;
