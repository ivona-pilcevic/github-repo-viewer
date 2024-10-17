export type Option = {
  value: string;
  label: string;
};

export interface SearchBarProps {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
}
export interface TopicTabsProps {
  topics: Option[];
  onTopicChange: (topic: string) => void;
  selectedTopic: string;
}

export interface DropdownProps {
  options: Option[];
  onOptionChange: (option: string) => void;
  label: string;
}

export interface Repository {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
    [key: string]: any;
  };
  stargazers_count: number;
  forks_count: number;
  [key: string]: any;
}

export interface RepositoryListProps {
  repositories: Repository[];
  page: number;
  changePage: (newPage: number) => void;
  totalPages: number;
  loading: boolean;
}

export interface RepositoryDetails {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
    [key: string]: any; 
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  languages: { [language: string]: number };
  contributors: Contributor[]; 
  [key: string]: any; 
}

export interface Contributor {
  login: string;
  avatar_url: string;
  contributions: number;
  [key: string]: any; 
}
export interface RepositoryDetailsProps {
  repositoryDetails: RepositoryDetails;
  contributors: any[];
  appliedLanguages: { [language: string]: number };
}
