import React from 'react';
import './CourseCard.css';
const CourseCard = () => {

    let courseTitle = 'Single Page Application'
    let courseDescription = 'A single-page application (SPA) is a web application or web site that interacts with the ' +
        'user by dynamically rewriting the current page rather than loading entire new pages from a server. ' +
        'This approach avoids interruption of the user experience between successive pages, making the application ' +
        'behave more like a desktop application. In an SPA, either all necessary code – HTML, JavaScript, and CSS – ' +
        'is retrieved with a single page load,[1] or the appropriate resources are dynamically ' +
        'loaded and added to the page as necessary, usually in response to user actions. ' +
        'The page does not reload at any point in the process, nor does control transfer to another page, ' +
        'although the location hash or the HTML5 History API can be used to provide the perception and navigability ' +
        'of separate logical pages in the application.[2] Interaction with the single page application often involves ' +
        'dynamic communication with the web server behind the scenes.';
    return (
        <div className="p-0 col-sm-12 col-md-4 col-lg-2 h-100">
            <div className="col-12 pl-3 pt-3 pb-0 pr-0 h-100">
                <div className="h-100" style={{background: "#FFFFFF"}}>
                    <div className="card-body">
                        <p className="card-text" style={{maxHeight: "20rem"}}>{courseDescription}</p>
                    </div>
                    <div className="h-25 p-2">
                        <h5 className="card-title font-weight-bold text-truncate">{courseTitle}</h5>
                        <div className="d-block">
                            <a className="mr-2 no-decorate d-inline" href="/course-editor/course-editor.template.client.html">
                                <i className="fas fa-file-alt"></i> </a>
                            <p className="mr-2 text-truncate d-inline">Modified 8.09 am</p>
                            <a className="-pull-right no-decorate d-inline" href="/course-editor/course-editor.template.client.html">
                                <i className="fas fa-ellipsis-v"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CourseCard;