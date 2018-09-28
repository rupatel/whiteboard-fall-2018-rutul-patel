import React from 'react';

const ImageWidgetPreview = () => {
    const imageWidgetInfo = {
        imageLink: 'http://lorempixel.com/300/150'
    }
    return (
        <div className="container">
            <img src={imageWidgetInfo.imageLink}/>
        </div>
    );
}
export default ImageWidgetPreview;