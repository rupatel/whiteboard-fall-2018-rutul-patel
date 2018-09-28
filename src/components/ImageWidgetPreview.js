import React from 'react';
const ImageWidgetPreview = () => {
    const imageWidgetInfo = {
        imageLink : 'http://lorempixel.com/300/150'
    }
    return (
        <div className="row mb-3">
            <img src={imageWidgetInfo.imageLink}/>
        </div>
    );
}
export default ImageWidgetPreview;