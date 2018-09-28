import React from 'react';

const ListWidgetContent = () => {
    return (
        <div className="container">
            <textarea className="form-control mb-2">Put each item in separate row</textarea>
            <select className="custom-select d-inline mb-2">
                <option selected>unordered list</option>
                <option>ordered list</option>
            </select>

            <input type="text" className="form-control" placeholder="Widget name"/>
        </div>
    )
}
export default ListWidgetContent;