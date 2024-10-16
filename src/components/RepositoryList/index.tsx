import { Link } from "react-router-dom";
import { RepositoryListProps } from "../../types/types";
import { renderPagination } from "../../utils/renderPagination";
import { RepositoryListItem } from "./style";

const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories,
  page,
  changePage,
  totalPages,
}) => {
  return (
    <>
      {repositories?.map((repo) => (
        <RepositoryListItem
          style={{ margin: 10, border: "2px solid #CCCCFF", padding: 5 }}
          onClick={() => console.log("go to page")}
        >
          <p>
            Name: {repo?.name}, Number of Stars: {repo?.stargazers_count},
            Number of Forks: {repo?.forks_count}, Owner's name:{" "}
            {repo?.owner?.login}, Owner's Avatar:{" "}
            <img width={50} height={50} src={`${repo?.owner?.avatar_url}`} />{" "}
          </p>
          <Link to={`/repository/${repo?.owner?.login}/${repo?.name}`}>
            View
          </Link>
          <br />
        </RepositoryListItem>
      ))}

      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        {renderPagination(page, changePage, totalPages)}
      </div>
    </>
  );
};

export default RepositoryList;
