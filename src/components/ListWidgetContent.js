import React from 'react';

const ListWidgetContent = ({widget}) => {
    return (
        <div className="container">
            <textarea className="form-control mb-2">{widget.items.split(',').join('\n')}</textarea>
            <select className="custom-select d-inline mb-2">
                {(!widget.isOrdered) ? <option selected>unordered list</option> : <option>unordered list</option>}
                {(!widget.isOrdered) ? <option selected>ordered list</option> : <option>ordered list</option>}
            </select>

            <input type="text" className="form-control" value={widget.name}/>
        </div>
    )
}
export default ListWidgetContent;