import { useEffect, useState } from "react";
import { searchRepositories } from "../api/githubApi";
import { orderOptions, sortOptions, topics } from "../data/constants";
import SearchBar from "../components/SearchBar";
import TopicTabs from "../components/TopicTabs";
import Dropdown from "../components/Dropdown";
import RepositoryList from "../components/RepositoryList";

const Home = () => {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");
  const [topic, setTopic] = useState<string>("React");
  const [selectedTopic, setSelectedTopic] = useState<string>("React");
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

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onTopicChange = (topic: string) => {
    setTopic(topic);
    setSelectedTopic(topic);
  };

  const onSortChange = (sort: string) => {
    setSort(sort);
  };

  const onOrderChange = (order: string) => {
    setOrder(order);
  };

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      <SearchBar onSearchChange={onSearchChange} query={query} />
      <TopicTabs
        topics={topics}
        onTopicChange={onTopicChange}
        selectedTopic={selectedTopic}
      />
      <Dropdown
        options={sortOptions}
        onOptionChange={onSortChange}
        label="Sort by"
      />
      <Dropdown
        options={orderOptions}
        onOptionChange={onOrderChange}
        label="Order"
      />
      <RepositoryList
        repositories={repositories}
        page={page}
        changePage={changePage}
        totalPages={totalPages}
        loading={loading}
      />
    </>
  );
};

export default Home;
