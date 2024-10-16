import { Link } from "react-router-dom";
import { RepositoryDetailsProps } from "../../types/types";
import { StyledRepositoryDetails } from "./style";

const RepoDetails: React.FC<RepositoryDetailsProps> = ({
  repositoryDetails,
  contributors,
  appliedLanguages,
}) => {
  return (
    <>
      <Link to="/">go back</Link>
      <StyledRepositoryDetails>
        <p>Repo name: {repositoryDetails?.name}</p>
        <br />
        <p>Number of stars: {repositoryDetails?.stargazers_count}</p>
        <br />

        <p>Number of forks: {repositoryDetails?.forks_count}</p>
        <br />

        <p>Owner's name: {repositoryDetails?.owner?.login}</p>
        <br />

        <p>
          Owner's avatar:{" "}
          <img
            width={20}
            height={20}
            src={`${repositoryDetails?.owner?.avatar_url}`}
          />
        </p>
        <br />

        <p>Number of open issues: {repositoryDetails?.open_issues_count}</p>
        <br />

        <p>
          Contributor list:{" "}
          <ol type="1">
            {contributors?.map((contributor, i) => (
              <li key={i}>{contributor?.login}</li>
            ))}
          </ol>
        </p>
        <br />
        <hr />
        <br />
        <p>
          List of applied programming languages:{" "}
          <ol type="1">
            {Object.entries(appliedLanguages!)?.map(([language, lines]) => (
              <li key={language}>
                {language}: {lines} lines
              </li>
            ))}
          </ol>
        </p>
        <br />
        <hr />
      </StyledRepositoryDetails>
    </>
  );
};

export default RepoDetails;
