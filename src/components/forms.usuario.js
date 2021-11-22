import { Row, Form, Col, Button } from 'react-bootstrap'

function FormsUsuario() {
  return (
    <Form>
        <br />
      <Row className="mb-3">
        <Form.Group as={Col} controlId="NomeFuncionario">
          <Form.Control type="text" placeholder="Nome" />
        </Form.Group>

        <Form.Group as={Col} controlId="Sobrenome">
          <Form.Control type="text" placeholder="Sobrenome" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Control placeholder="matricula" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Control placeholder="Servidor" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Control placeholder="Descrição de Cargo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Control placeholder="Setor" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Control placeholder="PIS/PASEP" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="RG">
          <Form.Control placeholder="CH" />
        </Form.Group>

        <Form.Group as={Col} controlId="CPF">
          <Form.Control placeholder="CPF" />
        </Form.Group>

        <Form.Group as={Col} controlId="Sexo">
          <Form.Select defaultValue="Sexo">
            <option>Feminino</option>
            <option>Masculino</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Control placeholder="Admissão" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Control placeholder="Lotação" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Control placeholder="Municipio" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Control placeholder="Situação" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
  );
}

export default FormsUsuario;
