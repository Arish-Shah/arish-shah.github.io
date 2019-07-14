import React from 'react';
import { Route } from 'react-router-dom';

import TopBar from './components/TopBar/TopBar';
import Home from './components/Home/Home';
import BottomBar from './components/BottomBar/BottomBar';

function App() {
  return (
    <div className="App">
      <Route path="/" component={TopBar} />
      <Route path="/" exact component={Home} />
      <Route path="/" component={BottomBar} />
    </div>
  );
}

export default App;
