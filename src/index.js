import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home/App';
import {  Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import CadastroVideo from './components/pages/cadastro/Video';
import Erro from './components/pages/404/index'
import CadastroCategoria from './components/pages/cadastro/Categoria';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route path='/' component={Home} exact />
      <Route component={Erro} />
    </Switch>
  </Router>,
  document.getElementById('root')
); 
