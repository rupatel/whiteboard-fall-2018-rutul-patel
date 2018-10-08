import React from 'react';

const ImageWidgetContent = ({widget}) => {
    return (
        <div className="container">
            <input type="text"
                   value={widget.src}
                   className="form-control mb-2"/>
            <input type="text" className="form-control" value={widget.name}/>
        </div>
    );
}
export default ImageWidgetContent;