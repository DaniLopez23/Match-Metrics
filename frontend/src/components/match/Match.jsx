import MatchHistorical from "./MatchHistorical";
import MatchResume from "./MatchResume";
import Field from "./Field";
import StatsRecorder from "./StatsRecorder";

import { Container, Row, Col, Card, CardBody, CardHeader, CardFooter, Navbar } from "reactstrap";


const Match = ({ match }) => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm="8">
            <StatsRecorder
              team="Madrid"
              stats={["Stat 1", "Stat 2", "Stat 3"]}
            />
          </Col>
          <Col>
            <MatchHistorical />
          </Col>
        </Row>
        <Row>
          <MatchResume />
        </Row>
        <Row>
          <Col xs="12">
            <Field />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Match;