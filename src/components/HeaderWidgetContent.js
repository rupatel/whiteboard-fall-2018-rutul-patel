import React from 'react';

const HeaderWidgetContnet = ({widget}) => {
    return (
        <div className="container">
            <input type="text" className="form-control mb-2" value={widget.text}/>
            <select className="custom-select d-inline mb-2">

                {widget.size == 1 ? <option selected>Heading1</option> : <option>Heading1</option>}
                {widget.size == 2 ? <option selected>Heading2</option> : <option>Heading2</option>}
                {widget.size == 3 ? <option selected>Heading3</option> : <option>Heading3</option>}
            </select>
            <input type="text" className="form-control" value={widget.name}/>
        </div>
    )
}
export default HeaderWidgetContnet;