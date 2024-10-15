import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          {/* route Home */}
          {/* route RepoDetails */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
