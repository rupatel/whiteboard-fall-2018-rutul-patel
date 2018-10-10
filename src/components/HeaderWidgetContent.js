import React from 'react';

const HeaderWidgetContnet = ({widget,updateWidget}) => {
    return (
        <div className="container">
            <label>Heading Text</label>
            <input type="text" className="form-control mb-2" value={widget.text} placeholder="Heading Text"
            onChange={e=> {
                let w = {...widget};
                w.text = e.currentTarget.value;
                updateWidget(w);
            }}/>
            <label>Heading Size</label>
            <select className="custom-select d-inline mb-2" onChange={e=> {
                let w = {...widget};
                w.size = e.currentTarget.value == 'Heading1' ? 1 :
                    e.currentTarget.value == 'Heading2' ? 2 : 3;
                updateWidget(w);
            }}>
                {widget.size == 1 ? <option selected>Heading1</option> : <option>Heading1</option>}
                {widget.size == 2 ? <option selected>Heading2</option> : <option>Heading2</option>}
                {widget.size == 3 ? <option selected>Heading3</option> : <option>Heading3</option>}
            </select>
            <label>Widget Name</label>
            <input type="text" className="form-control" value={widget.name} placeholder="Widget Name"
                   onChange={e=> {
                       let w = {...widget};
                       w.name = e.currentTarget.value;
                       updateWidget(w);
                   }}/>
        </div>
    )
}
export default HeaderWidgetContnet;