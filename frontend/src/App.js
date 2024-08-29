import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Match from "./components/match/Match";
import HomeNavBar from "./components/HomeNavBar";
import Home from "./components/Home";
import Teams from "./components/teams/Teams";
import AddNewTeam from "./components/teams/AddNewTeam";
import ListPlayer from "./components/players/ListPlayer";
import {player} from "./utils"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Navbar,
} from "reactstrap";



function App() {

  const listaJugadores = [
    player, player
  ]
  return (
    <>
      <Router>
        <HomeNavBar />

        <Routes>
          <Route path="/teams" element={<Teams />} />
          <Route path="/addteam" element={<AddNewTeam />} />

          <Route path="/players" element={<ListPlayer players={listaJugadores}/>} />

          <Route path="/match/:id" element={<Match />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
