import TopicService from "./TopicService";

let topicService = new TopicService();
export default class WidgetService {
    static createWidget(courseId, moduleId, lessonId, topicId, widget) {
        let widgets = this.findAllWidgetsForTopic(courseId, moduleId, lessonId, topicId);
        widgets.push(widget);
        let topic = {...TopicService.findTopicById(courseId, moduleId, lessonId, topicId)};
        topic.widgets = widgets;
        TopicService.updateTopic(courseId, moduleId, lessonId, topic);
    }

    static findAllWidgetsForTopic(courseId, moduleId, lessonId, topicId) {
        let topic = {...TopicService.findTopicById(courseId, moduleId, lessonId, topicId)};
        let widgets = topic.widgets ? topic.widgets : [];
        return [... widgets];
    }

    static findAllWidgets(courseId, moduleId, lessonId) {
        let topics = TopicService.findAllTopics(courseId, moduleId, lessonId);
        let widgets = topics.flatMap(t => {
            if(t.widgets) return t.widgets
            else return [];
        });
        return widgets;
    }

    static findWidgetById(courseId, moduleId, lessonId, topicId, widgetId) {
        let widgets = this.findAllWidgets(courseId, moduleId, lessonId, topicId);
        return widgets.filter(w => w.id == widgetId)[0]
    }

    static updateWidget(courseId, moduleId, lessonId, topicId, widget) {
        let widgets = this.findAllWidgets(courseId, moduleId, lessonId, topicId).map(w => {
            if (w.id == widget.id) return widget;
            else return w;
        });
        let topic = {...TopicService.findTopicById(courseId, moduleId, lessonId, topicId)};
        topic.wdgets = widgets
        TopicService.updateTopic(courseId, moduleId, lessonId, topic);
    }

    static deleteWidget(courseId, moduleId, lessonId, topicId, widgetId) {
        let topic = {... TopicService.findTopicById(courseId, moduleId, lessonId, topicId)};
        topic.widgets = topic.widgets.filter(w => w.id != widgetId);
        TopicService.updateTopic(courseId, moduleId, lessonId, topic);
    }

    static  saveWidgets(courseId, moduleId, lessonId, topicId, widgets){
        let topic = {... TopicService.findTopicById(courseId, moduleId, lessonId, topicId)};
        topic.widgets = widgets;
        topicService.updateTopic(courseId, moduleId, lessonId, topic);
    }
}