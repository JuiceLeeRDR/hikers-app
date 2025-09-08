import React from "react";
import "./Main.css";
import Searchbar from "../Searchbar/Searchbar";
import Reviews from "../Reviews/Reviews";

function Main() {
  return (
    <main>
      <Searchbar />
      <Reviews />
    </main>
  );
}

export default Main;
