import React from 'react';

const LinkWidgetContent = () => {
    return (
        <div className="container">
            <input type="text"
                   value="http://www.youtube.com/user/jannuzi"
                   className="form-control mb-2"/>
            <input type="text"
                   value="linke text"
                   className="form-control mb-2"/>
            <input type="text" className="form-control" placeholder="Widget name"/>
        </div>
    );
}
export default LinkWidgetContent;