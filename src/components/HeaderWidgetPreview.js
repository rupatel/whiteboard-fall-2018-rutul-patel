import React from 'react';

const HeaderWidgetPreview = ({widget}) => {
    const headingText = widget.text;
    const size = widget.size;
    let heading;
    if (size == 1)
        heading = <h1>{headingText}</h1>
    else if (size == 2)
        heading = <h2>{headingText}</h2>
    else if (size == 3)
        heading = <h3>{headingText}</h3>
    return (
        <div className="container">
            {heading}
        </div>
    );
}
export default HeaderWidgetPreview;