import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RepositoryDetails from "./pages/RepositoryDetails";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/repository/:owner/:repo"
            element={<RepositoryDetails />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
