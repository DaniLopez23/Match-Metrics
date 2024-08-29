import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Match from "./components/match/Match";
import HomeNavBar from "./components/HomeNavBar";
import Home from "./components/Home";
import Teams from "./components/teams/Teams";

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
  return (
    <>
      <Router>
        <HomeNavBar />

        <Routes>
          <Route path="/teams" element={<Teams />} />
          <Route path="/match/:id" element={<Match />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
