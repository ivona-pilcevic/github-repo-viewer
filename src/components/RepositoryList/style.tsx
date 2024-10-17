import styled from "styled-components";

export const RepoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #0d1117;
`;

export const RepoRow = styled.tr`
  border-bottom: 1px solid #30363d;

  &:hover {
    background-color: #161b22;
    cursor: pointer;
  }
`;

export const RepoCell = styled.td`
  padding: 15px;
  color: #c9d1d9;
`;

export const RepoHeader = styled.th`
  padding: 15px;
  color: #58a6ff;
  text-align: left;
  border-bottom: 1px solid #30363d;
`;

export const AvatarImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;
