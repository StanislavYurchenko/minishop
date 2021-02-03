import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Counter } from '../Counter/Counter';
import UpperBar from '../UpperBar/UpperBar';
import Navigation from '../Navigation/Navigation';
import HomeView from '../../views/HomeView/HomeView';
import CardView from '../../views/CardView/CardView';
import CartView from '../../views/CartView/CartView';

import './App.css';

function App() {
  return (
    <div>
      <UpperBar>
        <Navigation />
      </UpperBar>

      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>

        <Route path="/card/:color">
          <CardView />
        </Route>

        <Route path="/cart">
          <CartView />
        </Route>

        <Route>
          <div>not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
