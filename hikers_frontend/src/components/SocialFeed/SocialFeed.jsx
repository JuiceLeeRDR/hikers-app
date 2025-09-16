import "./SocialFeed.css";
import ImageCard from "../ImageCard/ImageCard";

const SocialFeed = () => {
  return (
    <div className="socialfeed-page">
      <div className="socialfeed__content">
        <header className="socialfeed-page__header">
          <h1>Social Feed</h1>
        </header>

        <section className="socialfeed-page__list">
          <ImageCard />
        </section>
      </div>
    </div>
  );
};

export default SocialFeed;
