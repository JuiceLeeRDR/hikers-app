import "./Searchbar.css";

function Searchbar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__text"
        placeholder="Find your next trail"
      />
    </div>
  );
}

export default Searchbar;
