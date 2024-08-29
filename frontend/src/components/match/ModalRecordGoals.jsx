import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const ModalRecordGoals = ({
  goalsModal,
  toogleModalGoals,
  goals,
  setGoals,
}) => {
  const handleSaveGoal = () => {};

  return (
    <Modal isOpen={goalsModal} toggle={toogleModalGoals}>
      <ModalHeader>Registrar gol</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <legend>Equipo</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> TEAM 1
              </Label>
            </FormGroup>
            <FormGroup>
              <Label>
                <Input type="radio" name="radio2" /> TEAM 2
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={toogleModalGoals}>Guardar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalRecordGoals;
