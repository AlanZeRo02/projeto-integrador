import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Servidor from "./components/pages/servidor";
import ServidorCadastro from "./components/pages/servidor.cadastro";
import Usuario from "./components/pages/usuario";
import UsuarioCadastro from "./components/pages/usuario.cadastro";
import Navbar from "./components/pages/layout/navbar";
import Container from "./components/pages/layout/container";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/servidor" element={<Servidor />}></Route>
          <Route
            exact
            path="/servidor/cadastro"
            element={<ServidorCadastro />}
          ></Route>
          <Route exact path="/usuario" element={<Usuario />}></Route>
          <Route
            exact
            path="/usuario/cadastro"
            element={<UsuarioCadastro />}
          ></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
