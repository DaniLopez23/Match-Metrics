import { Table, Container, Row, Col, Button } from "reactstrap";
import TablaEquipos from "./TablaEquipos";
import { useNavigate } from "react-router-dom";

const Teams = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Row>
          <TablaEquipos />
        </Row>
        <Row>
          <Col xs="6">
            <Button color="primary" onClick={() => navigate("/addteam")}>
              Crear equipo +
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Teams;
