import React from 'react';

const LinkWidgetPreview = () => {
    const linkWidgetInfo = {
        link: 'http://www.youtube.com/user/jannuzi',
        linkText: 'linke text'
    }
    return (
        <div className="container">
            <a href={linkWidgetInfo.link}>{linkWidgetInfo.linkText}</a>
        </div>
    );
}
export default LinkWidgetPreview;