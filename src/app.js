import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Dashboard from './modules/dashboard/dashboard.component';
import Login from './modules/authentication/login.component';
import NotFound from './modules/authentication/404.component';

const App = (props) => {

    const user = useSelector(state => state.auth);
    // const dispatch = useDispatch();
    // console.log('props', props);

    // useEffect(() => {
    //     console.log('user isLogged effect', user);
    // }, [user])
    return (

        <Switch>
            <Redirect from="/" to="/login" exact strict />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" render={() => (user.isLogged ? (<Dashboard {...props} />) : (<Redirect to="/login" />))} />
            <Route component={NotFound} />
        </Switch>

    );
}

export default withRouter(App);