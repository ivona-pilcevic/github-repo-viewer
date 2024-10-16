import { useEffect, useState } from "react";
import { getRepositoryDetails } from "../api/githubApi";
import { useParams } from "react-router-dom";
import RepoDetails from "../components/RepoDetails";

const RepositoryDetails: React.FC = () => {
  const [repoDetails, setRepoDetails] = useState<any>(null);

  const { owner, repo } = useParams<{ owner: string; repo: string }>();

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await getRepositoryDetails(owner!, repo!);
      setRepoDetails(response?.data);
    };

    fetchDetails();
  }, []);

  if (!repoDetails) {
    return <div>Loading...</div>;
  }

  return <RepoDetails repositoryDetails={repoDetails} />;
};

export default RepositoryDetails;
