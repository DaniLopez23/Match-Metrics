import { useState } from "react";

const StatsRecorder = ({ stats, team, match }) => {

  const [goals, setGoals] = useState(0);
  const [corners, setCorners] = useState(0);
  const [foulsFor, setFoulsFor] = useState(0);
  const [foulsAgainst, setFoulsAgainst] = useState(0);
    
  return (
    <div>
      <h2>Estadísticas</h2>
      <button>-</button>Goles<button>+</button>
      <p></p>
      <button>-</button>
      <div>Corners</div>
      <button>+</button>
      <p></p>
      <button>-</button>Faltas a favor<button>+</button>
      <p></p>
      <button>-</button>Faltas en contra<button>+</button>
      <p></p>
    </div>
  );
};

export default StatsRecorder;
