import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonList/>
        </Route>
        <Route exact path="/pokemon">
          <Pokemon/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
