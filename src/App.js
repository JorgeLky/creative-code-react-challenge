import React from 'react';
import { LoginPage, ListsPage } from './pages/index'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={ LoginPage } />
          <Route path="/Listas" component={ ListsPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
