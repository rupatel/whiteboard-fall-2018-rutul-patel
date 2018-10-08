import React from "react";

const ListWidgetPreview = ({widget}) => {
    const list = widget.items.split(',');
    const items = list.map(item => {
        return (<li>{item}</li>)
    })
    return (
        <div className="container">
            {widget.isOrdered && <ul> {items} </ul>}
            {!widget.isOrdered && <ol> {items} </ol>}
        </div>
    )
}
export default ListWidgetPreview;