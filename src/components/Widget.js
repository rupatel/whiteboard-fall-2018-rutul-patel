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
import './Widget.css'
import {Link} from 'react-router-dom';

const Widget = ({widget}) => {
    const widgetContentStyle = {
        background: 'whitesmoke'
    }
    let selectedElement;

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="offset-9">
                    <button className="btn btn-success mr-2">Save</button>
                    <span className="mr-2">Preview</span>
                    <Link className="no-decorate" to="#"><i className="fas fa-2x fa-toggle-off"></i></Link>
                </div>
            </div>
            <div className="container" style={widgetContentStyle}>
                <div className="row mb-3">
                    <div className="col-5">
                        {'HEADING' == widget.type && <h1>Heading widget</h1>}
                        {'PARAGRAPH' == widget.type && <h1>Paragraph widget</h1>}
                        {'LIST' == widget.type && <h1>List widget</h1>}
                        {'IMAGE' == widget.type && <h1>Image widget</h1>}
                        {'LINK' == widget.type && <h1>Link widget</h1>}
                    </div>
                    <div className="col-7">
                        <button className="btn btn-danger float-right">
                            <i className="fas fa-times-circle"></i>
                        </button>

                        <select
                            onChange={e => {
                                widget.type = selectedElement.value
                            }
                            }
                            className="mr-2 custom-select d-inline w-50 float-right"
                            ref={selectDomElement => {
                                selectedElement = selectDomElement
                            }}>
                            <option>Heading</option>
                            <option>Paragraph</option>
                            <option>List</option>
                            <option>Image</option>
                            <option>Link</option>
                        </select>

                        <button className="mr-2 btn btn-warning float-right">
                            <i className="fas fa-arrow-down"></i>
                        </button>

                        <button className="mr-2 btn btn-warning float-right">
                            <i className="fas fa-arrow-up"></i>
                        </button>
                    </div>
                    {'HEADING' == widget.type && <HeaderWidgetContent widget={widget}/>}
                    {'PARAGRAPH' == widget.type && <ParagraphWidgetContent widget={widget}/>}
                    {'LIST' == widget.type && <ListWidgetContent widget={widget}/>}
                    {'IMAGE' == widget.type && <ImageWidgetContent widget={widget}/>}
                    {'LINK' == widget.type && <LinkWidgetContent widget={widget}/>}
                </div>
                <div className="container">
                    <div className="row mb-3">
                        <span className="text-black font-weight-bold">Preview</span>
                    </div>
                    <div className="row mb-3">
                        {'HEADING' == widget.type && <HeaderWidgetPreview widget={widget}/>}
                        {'PARAGRAPH' == widget.type && <ParagraphWidgetPreview widget={widget}/>}
                        {'LIST' == widget.type && <ListWidgetPreview widget={widget}/>}
                        {'IMAGE' == widget.type && <ImageWidgetPreview widget={widget}/>}
                        {'LINK' == widget.type && <LinkWidgetPreview widget={widget}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Widget;