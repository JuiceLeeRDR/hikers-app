import "./TrailsCardModal.css";

function TrailCardModal({ trail }) {
  const difficultyMap = { 1: "Easy", 2: "Moderate", 3: "Hard" };
  const loops = Object.values(trail.loops || {});
  const longestLoop = loops.length
    ? loops.reduce((a, b) =>
        parseFloat(a.distance) > parseFloat(b.distance) ? a : b
      )
    : null;

  return (
    <div className="trail-card">
      <h2>{trail.name}</h2>
      <p>Difficulty: {difficultyMap[trail.difficulty] || "Unknown"}</p>
      {longestLoop && <p>Distance: {longestLoop.distance} miles</p>}
    </div>
  );
}

export default TrailCardModal;
