import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: ${({ isActive }) => (isActive ? "#58a6ff" : "#0d1117")};
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#c9d1d9")};
  border: none;
  border-bottom: ${({ isActive }) =>
    isActive ? "2px solid #58a6ff" : "2px solid transparent"};
  cursor: pointer;

  &:hover {
    background-color: #161b22;
  }
`;
