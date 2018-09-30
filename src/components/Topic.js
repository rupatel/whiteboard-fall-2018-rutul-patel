import React from 'react';
import TopicTabPane from "./TopicTabPane";
import TopicTabContent from "./TopicTabContent";
import ModuleTabContent from "./ModuleTabContent";

const Topic = ({updateTopic,deleteTopic,addTopic,selectedTopic,selectTopic,topics}) => {
    return (
        <div>
            <TopicTabPane
                updateTopic = {updateTopic}
                deleteTopic = {deleteTopic}
                addTopic = {addTopic}
                selectedTopic = {selectedTopic}
                selectTopic = {selectTopic}
                topics = {topics}
            />
            <TopicTabContent/>
        </div>
    );
}
export default Topic;