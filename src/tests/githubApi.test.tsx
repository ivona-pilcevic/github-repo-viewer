import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  getAppliedLanguages,
  getContributorList,
  getRepositoryDetails,
  searchRepositories,
} from "../api/githubApi";

const mock = new MockAdapter(axios);

describe("GitHub API", () => {
  afterEach(() => {
    mock.reset();
  });

  const generateRandomItems = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `repo-${i + 1}`,
      owner: { login: `user-${i + 1}` },
      stargazers_count: Math.floor(Math.random() * 1000),
      forks_count: Math.floor(Math.random() * 500),
    }));
  };

  test("searchRepositories should return variable data", async () => {
    const query = "react";
    const topic = "hooks";
    const sort = "stars";
    const order = "desc";
    const page = 1;
    const itemsCount = Math.floor(Math.random() * 10) + 1;

    const mockResponse = {
      total_count: itemsCount,
      items: generateRandomItems(itemsCount),
    };

    mock
      .onGet("/search/repositories", {
        params: {
          q: `${query}+topic:${topic}`,
          sort,
          order,
          per_page: 10,
          page,
        },
      })
      .reply(200, mockResponse);

    const response = await searchRepositories(query, topic, sort, order, page);

    expect(response.data).toBeDefined();
    expect(response.data.items).toBeDefined();
    expect(Array.isArray(response.data.items)).toBe(true);
    expect(response.data.items.length).toBeGreaterThan(0);
  });

  test("getRepositoryDetails should return data", async () => {
    const owner = "facebook";
    const repo = "react";

    const mockResponse = {
      name: "react",
      owner: { login: owner, avatar_url: "https://example.com/avatar.png" },
      stargazers_count: Math.floor(Math.random() * 1000),
      forks_count: Math.floor(Math.random() * 500),
      open_issues_count: Math.floor(Math.random() * 100),
    };

    mock.onGet(`/repos/${owner}/${repo}`).reply(200, mockResponse);

    const response = await getRepositoryDetails(owner, repo);

    expect(response.data).toBeDefined();
    expect(response.data.name).toBe(repo);
  });

  test("getContributorList should return variable data", async () => {
    const owner = "facebook";
    const repo = "react";
    const contributorsCount = Math.floor(Math.random() * 10) + 1;

    const mockResponse = Array.from({ length: contributorsCount }, (_, i) => ({
      login: `contributor-${i + 1}`,
      contributions: Math.floor(Math.random() * 100),
    }));

    mock.onGet(`/repos/${owner}/${repo}/contributors`).reply(200, mockResponse);

    const response = await getContributorList(owner, repo);

    expect(response.data).toBeDefined();
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test("getAppliedLanguages should return variable data", async () => {
    const owner = "facebook";
    const repo = "react";

    const mockResponse = {
      C: 5227,
      "C++": 44290,
      CSS: 70006,
      CoffeeScript: 17929,
      HTML: 111953,
      JavaScript: 4830301,
      Makefile: 189,
      Python: 259,
      RenderScript: 190,
      Rust: 814723,
      Shell: 4689,
      TypeScript: 1651771,
    };

    mock.onGet(`/repos/${owner}/${repo}/languages`).reply(200, mockResponse);

    const response = await getAppliedLanguages(owner, repo);

    expect(response.data).toBeDefined();
    expect(typeof response.data).toBe("object");
    expect(Object.keys(response.data).length).toBeGreaterThan(0);
  });
});
