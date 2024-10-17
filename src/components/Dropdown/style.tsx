import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 10px;
`;

export const DropdownButton = styled.button`
  padding: 10px;
  background-color: #238636;
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: #2ea043;
  }
`;

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: #161b22;
  border: 1px solid #30363d;
  border-radius: 5px;
  padding: 10px;
  right: 0;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  color: #c9d1d9;

  &:hover {
    background-color: #58a6ff;
    color: white;
  }
`;
