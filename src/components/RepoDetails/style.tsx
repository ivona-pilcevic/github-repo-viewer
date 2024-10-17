import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRepositoryDetails = styled.div`
  background-color: #161b22;
  border: 1px solid #30363d;
  border-radius: 10px;
  margin: 50px;
  padding: 30px;
  color: #c9d1d9;
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px 0;
`;

export const SectionTitle = styled.h2`
  color: #58a6ff;
  margin-bottom: 10px;
  font-size: 1.5rem;
  border-bottom: 1px solid #58a6ff;
  padding-bottom: 5px;
`;

export const List = styled.ol`
  padding-left: 20px;
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  color: #c9d1d9;
  margin-bottom: 5px;
`;

export const GoBackLink = styled(Link)`
  color: #58a6ff;
  font-size: 1rem;
  text-decoration: none;
  margin-bottom: 20px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;
