import Player from "./Player";
import { List } from "reactstrap";

const ListPlayer = ({ players }) => {
  return (
    <div>
      <h2>Players</h2>
      {players.map((player) => (
        <List key={player.id}>
          <Player player={player} />
        </List>
      ))}
    </div>
  );
};

export default ListPlayer;
