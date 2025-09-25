import "./TrailsPage.css";
import ImageCard from "../ImageCard/ImageCard";

const TrailsPage = () => {
  return (
    <div className="trails-page">
      <div className="trails-page__content">
        <header className="trails-page__header">
          <h1>Trails</h1>
        </header>
        <input type="text" placeholder="Search trails..." />

        <section className="trails-page__list">
          <ImageCard />
        </section>
      </div>
    </div>
  );
};

export default TrailsPage;
