import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  Button,
  Container,
  Row,
  Col,
  CardFooter,
} from "reactstrap";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <Row className="text-center m-5">
          <h1>Bienvenido a Match Metrics</h1>
          <p className="mt-2">
            Match Metrics es una aplicación para el registro de estadísticas de
            partidos de fútbol<strong> en tiempo real</strong>.
          </p>
        </Row>
        <Row>
          <Col sm="4" className="mt-2">
            <Card>
              <CardBody>
                <CardTitle>Ver Equipos</CardTitle>
                <CardText>
                  Observa y analiza las distintas estadisticas recogidas de los
                  diferentes partidos
                </CardText>
              </CardBody>
              <CardFooter>
                <Button onClick={() => navigate("/teams")}>Equipos</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col sm="4" className="mt-2">
            <Card>
              <CardBody>
                <CardTitle>Ver Partidos</CardTitle>
                <CardText>
                  Observa y analiza las distintas estadisticas recogidas de los
                  diferentes partidos
                </CardText>
              </CardBody>
              <CardFooter>
                <Button onClick={() => navigate("/matchs")}>Partidos</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col sm="4" className="mt-2">
            <Card>
              <CardBody>
                <CardTitle>Ver Estadisticas</CardTitle>
                <CardText>
                  Observa y analiza las distintas estadisticas recogidas de los
                  diferentes partidos
                </CardText>
              </CardBody>
              <CardFooter>
                <Button>Estadisticas</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
