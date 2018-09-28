import React from 'react';

const ParagraphWidgetContent = () => {
    return (
        <div className="container">
            <textarea className="form-control mb-2">Lorem ipsum</textarea>
            <input type="text" className="form-control" placeholder="Widget name"/>
        </div>
    );
}
export default ParagraphWidgetContent;