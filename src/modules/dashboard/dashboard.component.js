import React, {  Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { states } from '../../app.routing';

const ComponentLinks = ({ states }) => 

    states.map(state =>
        <li key={state.name}>
            <NavLink to={'/dashboard' + state.url}>{state.name}</NavLink>
        </li>
    );

const RouteComponents = ({ states }) => 

    states.map(state =>
        <Route key={state.name} exact path={'/dashboard' + state.url} component={state.component} />
    );



const Dashboard = () => {
    // console.log('im in dashboard', props);
    // console.log('states', states);
    // const { pathname } = props;
    return (
        <Router>
            <section className='grid--dashboard'>
                <header className='top'> this is dashboard</header>
                <nav className='menu'>
                    <ul>
                        <ComponentLinks states={states} />
                    </ul>
                </nav>
                <main className='main' style={getStyle.wrapper}>
                    <Switch>
                        <Suspense fallback={<div>...loading</div>}>
                            <RouteComponents states={states} />
                        </Suspense>
                    </Switch>
                </main>
                <footer className='footer'></footer>
            </section>
        </Router>
    );
};
const getStyle = {
    wrapper:{
        overflowY: 'scroll',
        padding: '1rem'
    }
};
export default Dashboard;