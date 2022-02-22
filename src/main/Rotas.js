import React from "react";

import {Route, Switch, HashRouter} from 'react-router-dom'
import Login from "../views/login";
import CadastroUsuario from "../views/CadastroUsuario";
import Home from "../views/Home";

export default function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro-usuario" component={CadastroUsuario}/>
                <Route path="/" component={Home}/>
            </Switch>
        </HashRouter>
    );
}