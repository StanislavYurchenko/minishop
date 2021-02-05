import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UpperBar from '../UpperBar/UpperBar';
import Navigation from '../Navigation/Navigation';
import HomeView from '../../views/HomeView/HomeView';
import DetailsView from '../../views/DetailsView/DetailsView';
import CartView from '../../views/CartView/CartView';
import Container from '../../components/Container/Container';

import './App.css';

function App() {
  return (
    <Container>
      <UpperBar>
        <Navigation />
      </UpperBar>

      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>

        <Route path="/product/:color">
          <DetailsView />
        </Route>

        <Route path="/cart">
          <CartView />
        </Route>

        <Route>
          <div>not found</div>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
