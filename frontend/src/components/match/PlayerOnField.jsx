const PlayerOnField = ({ player }) => {
  const { name, position: position, photo } = player;
  
  const style = {
    position: "absolute",
    width: "7%",
    height: "10%",
  };

  return (
    <div>
      <img className={`player-${position}`} src={photo} alt={name} style={style} />
    </div>
  );
}

export default PlayerOnField;