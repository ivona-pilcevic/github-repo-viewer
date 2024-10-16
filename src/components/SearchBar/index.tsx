import React from "react";
import { SearchBarProps } from "../../types/types";
import { StyledSearchBar } from "./style";

const SearchBar: React.FC<SearchBarProps> = ({
  onSearchChange,
  query,
}) => {
  return (
    <StyledSearchBar
      type="text"
      placeholder="Search repositories..."
      onChange={onSearchChange}
      value={query}
    ></StyledSearchBar>
  );
};

export default SearchBar;