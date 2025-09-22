import React from "react";
import "./Main.css";
import Searchbar from "../Searchbar/Searchbar";
import ReviewCards from "../ReviewCards/ReviewCards";
import About from "../About/About";
import Footer from "../Footer/Footer";

function Main({ onTrailSelect }) {
  return (
    <main>
      <section className="main-page__section">
        <Searchbar onTrailSelect={onTrailSelect} />
        <p className="main-page__reviews-text">Recent Reviews:</p>
        <ReviewCards />
      </section>
      <section className="main-page__section_about">
        <About />
      </section>
      <section className="main-page__section_footer">
        <Footer />
      </section>
    </main>
  );
}

export default Main;
