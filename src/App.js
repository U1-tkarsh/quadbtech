import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

function App() {
  return (
    <Router>
      <div className="container" style={{width: '18rem'}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/show/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-info">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Welcome to the TV Shows</span>
        </div>
      </nav>
      <ShowList />
    </div>
  );
};

export default App;
