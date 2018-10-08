import React from 'react';

const LinkWidgetContent = ({widget}) => {
    return (
        <div className="container">
            <input type="text"
                   value={widget.href}
                   className="form-control mb-2"/>
            <input type="text"
                   value="linke text"
                   className="form-control mb-2"/>
            <input type="text" className="form-control" value={widget.name}/>
        </div>
    );
}
export default LinkWidgetContent;