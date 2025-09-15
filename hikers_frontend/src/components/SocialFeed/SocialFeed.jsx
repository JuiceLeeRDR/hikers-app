import "./SocialFeed.css";
import ReviewCard from "../ReviewCards/ReviewCards";

const SocialFeed = () => {
  return (
    <div className="socialfeed-page">
      <div className="socialfeed__content">
        <header className="socialfeed-page__header">
          <h1>Social Feed</h1>
        </header>

        <section className="socialfeed-page__list">
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

export default SocialFeed;
