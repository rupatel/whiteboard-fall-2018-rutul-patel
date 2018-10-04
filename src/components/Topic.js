import React from 'react';
import TopicPills from "./TopicPills";
import WidgetList from "./WidgetList";

const Topic = ({updateTopic,deleteTopic,addTopic,selectedTopic,selectTopic,topics,widgets}) => {
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
            <WidgetList
                widgets= {widgets}/>
        </div>
    );
}
export default Topic;