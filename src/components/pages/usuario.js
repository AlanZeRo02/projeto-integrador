import { Button } from 'react-bootstrap'
import {Link } from 'react-router-dom'
import './usuario.css'

function Usuario() {
  return (
    <div>
      <h1>Usuario aqui tbm</h1>
      <p>Registro dos Funcionarios</p>
      <Button variant="light" type="submit"><Link to="/usuario/cadastro">Cadastrar usuario</Link>
      </Button>
    </div>
  );
}
export default Usuario;
