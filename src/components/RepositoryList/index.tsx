import { useNavigate } from "react-router-dom";
import { RepositoryListProps } from "../../types/types";
import { renderPagination } from "../../utils/renderPagination";
import { AvatarImage, RepoCell, RepoHeader, RepoRow, RepoTable } from "./style";
import { ClipLoader } from "react-spinners";
import { LoaderWrapper, PaginationWrapper } from "../../styles/wrappers";

const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories,
  page,
  changePage,
  totalPages,
  loading,
}) => {
  const navigate = useNavigate();

  const handleRowClick = (owner: string, repo: string) => {
    navigate(`/repository/${owner}/${repo}`);
  };
  return (
    <>
      {loading ? (
        <LoaderWrapper>
          <ClipLoader color="#58a6ff" size={50} />
        </LoaderWrapper>
      ) : (
        <>
          <RepoTable>
            <thead>
              <tr>
                <RepoHeader>Owner</RepoHeader>
                <RepoHeader>Repository</RepoHeader>
                <RepoHeader>Stars</RepoHeader>
                <RepoHeader>Forks</RepoHeader>
              </tr>
            </thead>
            <tbody>
              {repositories.map((repo) => (
                <RepoRow
                  key={repo.id}
                  onClick={() => handleRowClick(repo?.owner?.login, repo?.name)}
                >
                  <RepoCell>
                    <AvatarImage
                      src={repo.owner.avatar_url}
                      alt={repo.owner.login}
                    />
                    {repo.owner.login}
                  </RepoCell>
                  <RepoCell>{repo.name}</RepoCell>
                  <RepoCell>{repo.stargazers_count}</RepoCell>
                  <RepoCell>{repo.forks_count}</RepoCell>
                </RepoRow>
              ))}
            </tbody>
          </RepoTable>

          <PaginationWrapper>
            {renderPagination(page, changePage, totalPages)}
          </PaginationWrapper>
        </>
      )}
    </>
  );
};

export default RepositoryList;
