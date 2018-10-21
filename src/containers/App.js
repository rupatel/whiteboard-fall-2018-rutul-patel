import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import AppReducer from '../reducers/AppReducer'
import {LoginContainer} from './LoginContainer'
import {history} from "../helpers/history";
import WhiteBoard from "./WhiteBoard";
import {Router,Route,Switch} from 'react-router-dom'

const App = () => {
    const store = createStore(AppReducer)
    return(
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                   <Route exact={true} path="/home" component={WhiteBoard}/>
                    <Route exact={true} path="/" component={LoginContainer}/>
                </Switch>
            </Router>
        </Provider>

    );
}
export default App;