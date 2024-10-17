import React from "react";
import { SearchBarProps } from "../../types/types";
import { Input, SearchBarContainer } from "./style";

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange, query }) => {
  return (
    <SearchBarContainer>
      <Input
        type="text"
        value={query}
        onChange={onSearchChange}
        placeholder="Search repositories..."
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
