import { TopicTabsProps } from "../../types/types";
import { TabButton, TabsContainer } from "./style";

const TopicTabs: React.FC<TopicTabsProps> = ({
  topics,
  onTopicChange,
  selectedTopic,
}) => {
  return (
    <TabsContainer>
      {topics.map((topic) => (
        <TabButton
          key={topic.value}
          isActive={selectedTopic === topic.value}
          onClick={() => onTopicChange(topic.value)}
        >
          {topic.label}
        </TabButton>
      ))}
    </TabsContainer>
  );
};

export default TopicTabs;
