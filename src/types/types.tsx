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
}

export interface DropdownProps {
  options: Option[];
  onOptionChange: (option: string) => void;
}

export interface RepositoryListProps {
  repositories: any[];
  page: number;
  changePage: (newPage: number) => void;
  totalPages: number;
}

export interface RepositoryDetailsProps {
  repositoryDetails: any;
  contributors: any[];
  appliedLanguages: Record<string, number> | null;
}
