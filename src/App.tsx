import React, { useEffect, useState } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { searchRepositories } from "./api/githubApi";
import { Repositiory } from "./types";

const App: React.FC = () => {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");
  const [topic, setStopic] = useState<string>("React");
  const [sort, setSort] = useState<string>("stars");
  const [order, setOrder] = useState<string>("desc");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await searchRepositories(
          query,
          topic,
          sort,
          order,
          page
        );
        setRepositories(response?.data?.items);
        setTotalPages(Math.ceil(response.data.total_count / 10));
      } catch (err) {
        setError("Failed to fetch repositories. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchRepositories();
    }, 500);

    return () => clearTimeout(timer);
  }, [query, sort, topic, order, page]);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          {/* route Home */}
          {/* route RepoDetails */}
        </Routes>
      </Router>
      <div>caoo</div>
    </>
  );
};

export default App;
