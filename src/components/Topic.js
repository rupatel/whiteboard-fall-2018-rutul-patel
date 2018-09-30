import React from 'react';
import TopicPills from "./TopicPills";
import WidgetList from "./WidgetList";
import ModuleTabContent from "./ModuleTabContent";

const Topic = ({updateTopic,deleteTopic,addTopic,selectedTopic,selectTopic,topics}) => {
    return (
        <div>
            <TopicPills
                updateTopic = {updateTopic}
                deleteTopic = {deleteTopic}
                addTopic = {addTopic}
                selectedTopic = {selectedTopic}
                selectTopic = {selectTopic}
                topics = {topics}
            />
            <WidgetList/>
        </div>
    );
}
export default Topic;