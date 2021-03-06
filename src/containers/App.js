import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import AppReducer from '../reducers/AppReducer'
import {LoginContainer} from './LoginContainer'
import {history} from "../helpers/history";
import WhiteBoard from "./WhiteBoard";
import {Router,Route,Switch} from 'react-router-dom'
import {RegisterContainer} from "./RegisterContainer";
import {ProfileContainer} from "./ProfileContainer";

const App = () => {
    const store = createStore(AppReducer)
    return(
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact={true} path="/register" component={RegisterContainer}/>
                    <Route exact={true} path="/profile" component={ProfileContainer}/>
                    <Route exact={true} path="/" component={LoginContainer}/>
                    <WhiteBoard/>
                </Switch>
            </Router>
        </Provider>

    );
}
export default App;