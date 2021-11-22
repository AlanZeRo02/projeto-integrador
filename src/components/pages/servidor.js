import {Button, Form, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Servidor() {
  return (
    <div>
      <h1>Servidor Registratos</h1>
      <p>Conferir os Servidores</p>
      <Form.Group as={Col} controlId="Sexo">
          <Form.Select defaultValue="Sexo">
            <option>ASSESORIA DE COMUNICAÇÃO</option>
            <option>CAPIXABA</option>
            <option>CAPS</option>
            <option>CECON</option>
            <option>CENTRO DE ATENÇÃO PSICOPESSOAL</option>
          </Form.Select>
        </Form.Group>
        <br />
      <Button variant="light" type="submit">
        <Link to="/servidor/cadastro">Cadastrar servidor</Link>
      </Button>
    </div>
  );
}
export default Servidor;
