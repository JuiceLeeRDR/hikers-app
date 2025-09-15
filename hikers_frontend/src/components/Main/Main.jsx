import React from "react";
import "./Main.css";
import Searchbar from "../Searchbar/Searchbar";
import ReviewCards from "../ReviewCards/ReviewCards";
import About from "../About/About";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <main>
      <section className="main-page__section">
        <Searchbar />
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
