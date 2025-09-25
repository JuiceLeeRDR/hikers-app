import React, { useState, useEffect } from "react";
import {
  getTrailsByCity,
  getTrailsByName,
  getTrailsByZip,
} from "../utils/prescriptionTrailApi";
import TrailsCardModal from "../TrailsCardModal/TrailsCardModal";
import "./Searchbar.css";

function Searchbar({ onTrailSelect }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    let trails = [];

    try {
      trails = await getTrailsByZip(query);
      console.log("Search query:", query);
      console.log("API response:", trails);
      if (trails && trails.trails && trails.trails.length > 0) {
        onTrailSelect(trails.trails[0]);
        return;
      }
    } catch {}
    try {
      trails = await getTrailsByCity(query);
      if (trails && trails.length > 0) {
        onTrailSelect(trails[0]);
        return;
      }
    } catch {}
    try {
      trails = await getTrailsByName(query);
      if (trails && trails.length > 0) {
        onTrailSelect(trails[0]);
        return;
      }
    } catch {}
    setError("No trails found for your search.");
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="search-bar__text"
          placeholder="Find your next trail"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" type="submit">
          {" "}
          Search{" "}
        </button>
      </form>
      {error && <p className="search-error">{error}</p>}
    </div>
  );
}

export default Searchbar;
