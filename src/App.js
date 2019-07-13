import React from 'react';
import { Route } from 'react-router-dom';

import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <Route path="/" component={TopBar} />
      <Route path="/" exact component={Home} />
    </div>
  );
}

export default App;
