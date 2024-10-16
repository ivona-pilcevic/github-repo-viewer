import { TopicTabsProps } from "../../types/types";

const TopicTabs: React.FC<TopicTabsProps> = ({ topics, onTopicChange }) => {
  return (
    <div>
      {topics.map((topic) => (
        <h4 onClick={() => onTopicChange(topic.value)}>{topic.label}</h4>
      ))}
    </div>
  );
};

export default TopicTabs;
