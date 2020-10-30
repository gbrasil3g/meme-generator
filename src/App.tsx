import React from 'react';
import Routes from './routes/routes'
import { BrowserRouter as Router } from 'react-router-dom'

import Global from './styles/global'

function App() {
  return (
    <Router>
      <Routes />

      <Global />
    </Router>
  );
}

export default App;
