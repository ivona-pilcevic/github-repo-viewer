import axios from "axios";

const URL = process.env.REACT_APP_GITHUB_API_URL;
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const apiClient = axios.create({
  baseURL: URL?.toString(),
  headers: {
    Authorization: `Bearer ${TOKEN?.toString()}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

export const searchRepositories = async (query: string, topic: string, sort: string,order: string, page: number) => {
  const response = await apiClient.get("/search/repositories", {
    params: {
      q: `${query}+topic:${topic}`,
      sort,
      order,
      per_page: 10,
      page
    },
  });
  return response;
};

export const getRepositoryDetails = async (owner: string, repo: string) => {
  const response = await apiClient.get(`/repos/${owner}/${repo}`);
  return response;
}