import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicTacToe from '../pages/TicTacToe.jsx';
import NotFound from '../pages/NotFound';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<TicTacToe />} />
      {/* Other routes here */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
