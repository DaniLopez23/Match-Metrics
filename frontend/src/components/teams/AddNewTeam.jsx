import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Card,
} from "reactstrap";
import { useField } from "../../hooks/useField";
import {divisionCategories} from "../../utils";
const AddNewTeam = () => {
  const teamName = useField("text");
  const division = useField("select");
  const city = useField("text");
  const fav = useField("checkbox");

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="teamName">Nombre</Label>
          <Input {...teamName} placeholder="nombre del equipo" />
        </FormGroup>
        <FormGroup>
          <Label for="teamCity">Ciudad</Label>
          <Input {...city} placeholder="ciudad del equipo" />
        </FormGroup>
        <FormGroup>
          <Label for="teamDivision">Division (categoria)</Label>
          <Input {...division}>
            {divisionCategories.map((division, index) => (<option key={index}>{division}</option>))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="teamDivision">Division (categoria)</Label>
          <Input {...division}>
            {divisionCategories.map((division, index) => (<option key={index}>{division}</option>))}
          </Input>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default AddNewTeam;
