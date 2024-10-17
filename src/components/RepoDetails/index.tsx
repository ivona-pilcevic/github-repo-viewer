import {
  FaStar,
  FaCodeBranch,
  FaUser,
  FaExclamationCircle,
} from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { RepositoryDetailsProps } from "../../types/types";
import {
  StyledRepositoryDetails,
  Avatar,
  SectionTitle,
  List,
  ListItem,
  GoBackLink,
} from "./style";
import { LoaderWrapper } from "../../styles/wrappers";

const RepoDetails: React.FC<RepositoryDetailsProps> = ({
  repositoryDetails,
  contributors,
  appliedLanguages,
}) => {
  return (
    <>
      <GoBackLink to="/">← Go back</GoBackLink>

      {!repositoryDetails ? (
        <LoaderWrapper>
          <ClipLoader color="#58a6ff" size={50} />
        </LoaderWrapper>
      ) : (
        <StyledRepositoryDetails>
          <SectionTitle>
            Repository Name: {repositoryDetails?.name}
          </SectionTitle>
          <p>
            <FaStar style={{ color: "#f0db4f", marginRight: "5px" }} />
            Stars: {repositoryDetails?.stargazers_count}
          </p>
          <p>
            <FaCodeBranch style={{ color: "#f0db4f", marginRight: "5px" }} />
            Forks:
            {repositoryDetails?.forks_count}
          </p>
          <p>
            <FaUser style={{ color: "#f0db4f", marginRight: "5px" }} />
            Owner: {repositoryDetails?.owner?.login}
          </p>
          <Avatar
            src={repositoryDetails?.owner?.avatar_url}
            alt={`${repositoryDetails?.owner?.login}'s avatar`}
          />

          <p>
            <FaExclamationCircle
              style={{ color: "#f0db4f", marginRight: "5px" }}
            />
            Open Issues: {repositoryDetails?.open_issues_count}
          </p>

          <SectionTitle>Contributors:</SectionTitle>
          <List>
            {contributors?.map((contributor, i) => (
              <ListItem key={i}>{contributor?.login}</ListItem>
            ))}
          </List>

          <SectionTitle>Applied Programming Languages:</SectionTitle>
          <List>
            {Object.entries(appliedLanguages!)?.map(([language, lines]) => (
              <ListItem key={language}>
                {language}: {lines} lines
              </ListItem>
            ))}
          </List>
        </StyledRepositoryDetails>
      )}
    </>
  );
};

export default RepoDetails;
