import "./ReviewsPage.css";
import ReviewCard from "../ReviewCards/ReviewCards";

const ReviewsPage = () => {
  return (
    <div className="reviews-page">
      <div className="reviews__content">
        <header className="reviews-page__header">
          <h1>Trail Reviews</h1>
          <input type="text" placeholder="Search reviews..." />
          <div className="reviews__filter__checkboxes">
            <p className="review__filter__text">Highest Rated:</p>
            <button className="reviews__filter__checkbox" type="checkbox">
              {" "}
            </button>
            <p className="review__filter__text review__filter__text-lowest">
              Lowest Rated:
            </p>
            <button className="reviews__filter__checkbox" type="checkbox">
              {" "}
            </button>
          </div>
        </header>

        <section className="reviews-page__list">
          <ReviewCard
            trail="Appalachian Trail"
            user="John Doe"
            rating={5}
            text="Amazing hike with great views!"
            date="Sept 2025"
          />
        </section>
      </div>
    </div>
  );
};

export default ReviewsPage;
