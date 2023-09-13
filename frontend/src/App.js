import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import NextPage from './NextPage';

function App() {
  return (
    <Router>
      <Routes>   
        <Route path="/" element={<MainPage />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;