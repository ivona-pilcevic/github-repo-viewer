import { Link } from "react-router-dom";
import { RepositoryDetailsProps } from "../../types/types";
import { StyledRepositoryDetails } from "./style";

const RepoDetails: React.FC<RepositoryDetailsProps> = ({
  repositoryDetails,
}) => {
  return (
    <>
      <Link to="/">go back</Link>
      <StyledRepositoryDetails>
        <p>Repo name: {repositoryDetails?.name}</p>
        <p>Number of stars: {repositoryDetails?.stargazers_count}</p>
        <p>Number of forks: {repositoryDetails?.forks_count}</p>
        <p>Owner's name: {repositoryDetails?.owner?.login}</p>
        <p>
          Owner's avatar:{" "}
          <img
            width={20}
            height={20}
            src={`${repositoryDetails?.owner?.avatar_url}`}
          />
        </p>
        <p>Number of open issues: {repositoryDetails?.open_issues_count}</p>
        <p>
          Contributor list: TODO
          (https://api.github.com/repos/adrianhajdin/project_chat_application/contributors)
        </p>
        <p>
          List of applied programming languages: TODO
          (https://api.github.com/repos/adrianhajdin/project_chat_application/languages){" "}
        </p>
      </StyledRepositoryDetails>
    </>
  );
};

export default RepoDetails;
