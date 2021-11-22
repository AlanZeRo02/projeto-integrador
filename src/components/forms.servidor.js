import { Row, Form, Col, Button } from "react-bootstrap";

function FormsServidor() {
  return (
    <Form>
      <br />
      <Row className="mb-3">
        <Form.Group as={Col} controlId="Nome">
          <Form.Control type="text" placeholder="Nome" />
        </Form.Group>

        <Form.Group as={Col} controlId="email">
          <Form.Control type="text" placeholder="Email" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formação">
        <Form.Control placeholder="Formação" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Control placeholder="PIS/PASEP" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="CPF">
          <Form.Control placeholder="CPF" />
        </Form.Group>

        <Form.Group as={Col} controlId="Sexo">
          <Form.Select defaultValue="Sexo">
            <option>Sexo</option>
            <option>Feminino</option>
            <option>Masculino</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="Celular">
          <Form.Control placeholder="Celular" />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>
  );
}

export default FormsServidor;
