import { useEffect, useState } from "react";
import {
  getAppliedLanguages,
  getContributorList,
  getRepositoryDetails,
} from "../api/githubApi";
import { useParams } from "react-router-dom";
import RepoDetails from "../components/RepoDetails";

const RepositoryDetails: React.FC = () => {
  const [repoDetails, setRepoDetails] = useState<any>(null);
  const [contributorList, setContributorList] = useState<any[]>([]);
  const [appliedLanguages, setAppliedLanguages] = useState<Record<string, number>>({});

  const { owner = "", repo = "" } = useParams<{
    owner: string;
    repo: string;
  }>();

  const fetchDetails = async () => {
    const response = await getRepositoryDetails(owner, repo);
    setRepoDetails(response?.data);
  };

  const fetchContributors = async () => {
    const response = await getContributorList(owner, repo);
    setContributorList(response?.data);
  };

  const fetchLanguages = async () => {
    const response = await getAppliedLanguages(owner, repo);
    setAppliedLanguages(response?.data);
  };

  useEffect(() => {
    fetchDetails();
    fetchContributors();
    fetchLanguages();
  }, []);

  if (!repoDetails) {
    return <div>Loading...</div>;
  }

  return (
    <RepoDetails
      repositoryDetails={repoDetails}
      contributors={contributorList}
      appliedLanguages={appliedLanguages}
    />
  );
};

export default RepositoryDetails;
