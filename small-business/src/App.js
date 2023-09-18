import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <AppRouter />
      </div>
    </Router>
  );
};

export default App;
