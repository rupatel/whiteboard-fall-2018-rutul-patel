import React from 'react';
import ListWidgetContent from './ListWidgetContent';
import ListWidgetPreview from './ListWidgetPreview';
import HeaderWidgetContent from './HeaderWidgetContent';
import HeaderWidgetPreview from './HeaderWidgetPreview';
import LinkWidgetContent from './LinkWidgetContent';
import LinkWidgetPreview from './LinkWidgetPreview';
import ImageWidgetContent from './ImageWidgetContent';
import ImageWidgetPreview from './ImageWidgetPreview';
import ParagraphWidgetContent from './ParagraphWidgetContent';
import ParagraphWidgetPreview from './ParagraphWidgetPreview';

const Widget = () => {
    const widgetContentStyle = {
        background: 'whitesmoke'
    }
    return (
        <div className="container">
            <div className="row mb-3">
                <div className="offset-9">
                    <button className="btn btn-success mr-2">Save</button>
                    <span className="mr-2">Preview</span>
                    <a><i className="fas fa-2x fa-toggle-off"></i></a>
                </div>
            </div>
            <div className="container" style={widgetContentStyle}>
                <div className="row mb-3">
                    <div className="col-7">
                        <h1>List widget</h1>
                    </div>
                    <div className="col-5">
                        <button className="mr-2 btn btn-warning">
                            <i className="fas fa-arrow-up"></i>
                        </button>
                        <button className="mr-2 btn btn-warning">
                            <i className="fas fa-arrow-down"></i>
                        </button>
                        <select className="mr-2 custom-select d-inline w-50">
                            <option>Heading</option>
                            <option>Paragraph</option>
                            <option>List</option>
                            <option>Image</option>
                            <option>Link</option>
                            <option></option>
                        </select>
                        <button className="btn btn-danger">
                            <i className="fas fa-times-circle"></i>
                        </button>
                    </div>
                    <ImageWidgetContent/>
                </div>
                <div className="container">
                    <div className="row mb-3">
                        <span className="text-black font-weight-bold">Preview</span>
                    </div>
                    <ImageWidgetPreview/>
                </div>
            </div>
        </div>
    )
}
export default Widget;