import React from 'react';

const CourseCard = () =>
    (
        <div className="p-0 col-sm-12 col-md-4 col-lg-2">
            <div className="col-12 pl-3 pt-3 pb-0 pr-0">
                <div className="card-body p-auto" style={{background: "#FFFFFF"}}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                </ul>
            </div>
        </div>
    )
export default CourseCard;