import LessonService from "./LessonService";

let lessonService =  new LessonService();
export default class WidgetService {
    createWidget(courseId,moduleId,lessonId,topicId,widget) {
        let widgets = this.findAllWidgets(courseId,moduleId,lessonId,topicId);
        widgets.push(widget);
        let topic = {...topicService.findTopicById(courseId,moduleId,lessonId,topicId)};
        topic.wdgets = widgets;
        topicService.updateTopic(courseId,moduleId,lessonId,topic);
    }

    findAllWidgets(courseId,moduleId,lessonId,topicId) {
        let topic = topicService.findTopicById(courseId,moduleId,lessonId,topicId);
        return topic.topics ? topic.widgets : [];
    }

    findWidgetById(courseId,moduleId,lessonId,topicId,widgetId) {
        let widgets = this.findAllWidgets(courseId,moduleId,lessonId,topicId);
        return widgets.filter(w => w.id == widgetId)[0]
    }
    updateWidget(courseId,moduleId,lessonId,topicId,widget) {
        let widgets = this.findAllWidgets(courseId,moduleId,lessonId,topicId).map(w =>{
            if(w.id == widget.id) return widget;
            else return w;
        });
        let topic = {...topicService.findTopicById(courseId,moduleId,lessonId,topicId)};
        topic.wdgets = widgets
        topicService.updateTopic(courseId,moduleId,lessonId,topic);
    }

    deleteWidget(courseId,moduleId,lessonId,topicId,widgetId) {
        let topic = {... topicService.findTopicById(courseId,moduleId,lessonId,topicId)};
        let newWidgets = topic.topics.filter(w => w.id != widgetId);
        topic.widget = newWidgets;
        topicService.updateTopic(courseId,moduleId,lessonId,topic);
    }
}
export default WidgetService;