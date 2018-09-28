import React from 'react';
const HeaderWidgetPreview = () => {
    const headerWidgetInfo = {
        headingText : 'Heading Text',
        headingType: 'Heading1'
    }
    let heading;
    if('Heading1'==headerWidgetInfo.headingType)
        heading =  <h1>{headerWidgetInfo.headingText}</h1>
    else if('Heading2'==headerWidgetInfo.headingType)
        heading =  <h2>{headerWidgetInfo.headingText}</h2>
    else if('Heading3'==headerWidgetInfo.headingType)
        heading =  <h3>{headerWidgetInfo.headingText}</h3>
    return (
        <div className="row mb-3">
                <h1>{heading}</h1>
        </div>
    );
}
export default HeaderWidgetPreview;