import React from 'react';
const HeaderWidgetContnet = () => {
    return (
        <div className="container">
            <input type="text" className="form-control mb-2" value="Heading Text"/>
                <select className="custom-select d-inline mb-2">
                    <option selected>Heading1</option>
                    <option>Heading2</option>
                    <option>Heading3</option>
                </select>
                <input type="text" className="form-control" placeholder="Widget name"/>
        </div>
    )
}
export default HeaderWidgetContnet;