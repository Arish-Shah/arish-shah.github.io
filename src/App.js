import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TopBar from './components/TopBar/TopBar';
import Home from './components/Home/Home';
import BottomBar from './components/BottomBar/BottomBar';
import NotFound from './components/404/NotFound';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={TopBar} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Route path="/" exact component={BottomBar} />
    </div>
  );
}

export default App;
