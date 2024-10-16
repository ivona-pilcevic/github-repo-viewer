import axios from "axios";

const URL = "https://api.github.com";
const TOKEN = "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";

const apiClient = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
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
