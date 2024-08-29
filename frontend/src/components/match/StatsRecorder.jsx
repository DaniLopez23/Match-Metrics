import { useState } from "react";
import { Container, Row, Col, Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import MatchResume from "./MatchResume";
import ModalRecordGoals from "./ModalRecordGoals";

const StatsRecorder = ({ stats, team, match }) => {
  const [goals, setGoals] = useState(0);
  const [corners, setCorners] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [offsides, setOffsides] = useState(0);

  const [goalsModal, setgoalsModal] = useState(false);
  const [cornersModal, setCornersModal] = useState(false);
  const [foulsModal, setFoulsModal] = useState(false);
  const [offsidesModal, setOffsidesModal] = useState(false);

  const toogleModalGoals = () => setgoalsModal(!goalsModal);
  const toogleModalCorners = () => setCornersModal(!cornersModal);
  const toogleModalFouls = () => setFoulsModal(!foulsModal);
  const toogleModalOffsides = () => setOffsidesModal(!offsidesModal);


  return (
    <Container className="my-3">
      <Row>
        <Col>
          <Button onClick={toogleModalGoals}>GOL</Button>
          <ModalRecordGoals goalsModal={goalsModal} toogleModalGoals={toogleModalGoals} goals={goals} setGoals={setGoals}/>
        </Col>
        <Col>
          <Button>CORNER</Button>
        </Col>
        <Col>
          <Button>FALTA</Button>
        </Col>
        <Col>
          <Button>FUERA DE JUEGO</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default StatsRecorder;
