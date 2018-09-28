import React from 'react';

const ImageWidgetContent = () => {
    return (
        <div className="container">
            <input type="text"
                   value="http://lorempixel.com/300/150"
                   className="form-control mb-2"/>
            <input type="text" className="form-control" placeholder="Widget name"/>
        </div>
    );
}
export default ImageWidgetContent;