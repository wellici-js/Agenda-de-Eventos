import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./services/history";

import BuscaEvento from "./pages/BuscaEvento";
import DivulgarEvento from "./pages/DivulgarEvento";
import ListaEventos from "./pages/ListaEventos";
import PaginaEvento from "./pages/PaginaEvento";

export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={BuscaEvento} />
      <Route path="/cadastro" component={DivulgarEvento} />
      <Route path="/evento/:id/:nome" component={PaginaEvento} />
      <Route path="/lista" component={ListaEventos} />
    </Switch>
  </Router>
);
