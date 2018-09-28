import React from 'react';
const ParagraphWidgetPreview = () => {
    const paraWidgetInfo = {
        para : 'Lorem ipsum'
    }
    return (
        <div className="row mb-3">
            <p>{paraWidgetInfo.para}</p>
        </div>
    );
}
export default ParagraphWidgetPreview