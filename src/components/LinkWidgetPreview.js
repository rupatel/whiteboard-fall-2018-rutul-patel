import React from 'react';
import {Link} from 'react-router-dom';
const LinkWidgetPreview = () => {
    const linkWidgetInfo = {
        link: 'http://www.youtube.com/user/jannuzi',
        linkText: 'linke text'
    }
    return (
        <div className="container">
            <Link href={linkWidgetInfo.link}>{linkWidgetInfo.linkText}</Link>
        </div>
    );
}
export default LinkWidgetPreview;