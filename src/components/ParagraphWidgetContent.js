import React from 'react';

const ParagraphWidgetContent = ({widget}) => {
    return (
        <div className="container">
            <textarea className="form-control mb-2">{widget.text}</textarea>
            <input type="text" className="form-control" value={widget.name}/>
        </div>
    );
}
export default ParagraphWidgetContent;