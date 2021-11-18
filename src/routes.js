import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Admin/Dashboard/intex';
import Servidores from './pages/Admin/Servidores/intex';
import ServidorCadastrar from './pages/Admin/Servidores/servidor.cadastrar';

import Usuarios from './pages/Admin/Usuarios/intex';
import UsuariosCadastrar from './pages/Admin/Usuarios/usuarios.cadastrar';

import Login from './pages/Login/intex';

import Home from './pages/Home/intex';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Login/intex" exact component={Login} />

                <Route path="/Admin" exact component={Dashboard} />

                <Route path="/Usuario" exact component={Usuarios} />
                <Route path="/Usuarios/:idUsuario" exact component={UsuariosCadastrar} />

                <Route path="/Servidores" exact component={Servidores} />
                <Route path="/Servidores/servidor.cadastrar" exact component={ServidorCadastrar} />
            </Switch>
        </BrowserRouter>

    )
}