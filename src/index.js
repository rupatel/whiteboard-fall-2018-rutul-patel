import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css'
import WhiteBoard from "./containers/WhiteBoard";

ReactDom.render(<WhiteBoard/>,document.getElementById('root'));