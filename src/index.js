import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css'
import WhiteBoard from "./containers/WhiteBoard";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import App from "./containers/App";


ReactDom.render(<App/>,document.getElementById('root'));