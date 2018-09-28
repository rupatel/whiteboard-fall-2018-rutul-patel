import React from "react";

const ListWidgetPreview = () => {
    const listWidgetInfo = {
        items: [
            'put each',
            'item',
            'a seperate row'
        ]
    }
    return (
        <div className="container">
            <ul>
                {listWidgetInfo['items'].map(item => {
                    return (<li>item</li>)
                })}
            </ul>
        </div>
    )
}
export default ListWidgetPreview;