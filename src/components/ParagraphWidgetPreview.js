import React from 'react';

const ParagraphWidgetPreview = () => {
    const paraWidgetInfo = {
        para: 'Lorem ipsum'
    }
    return (
        <div className="container">
            <p>{paraWidgetInfo.para}</p>
        </div>
    );
}
export default ParagraphWidgetPreview