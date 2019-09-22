import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

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



const Dashboard = (props) => {
    console.log('im in dashboard', props);
    const { location } = props;
    // console.log('states', states);
    // const { pathname } = props;
    return (
        // <Router>
        <section className='grid--dashboard'>
            <header className='top'> this is dashboard {location.pathname}</header>
            <nav className='menu'>
                <ul>
                    <ComponentLinks states={states} />
                </ul>
            </nav>
            <main className='main' style={getStyle.wrapper}>
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames="fade"
                        exit={false}
                        timeout={1000}
                    >
                        <Switch location={location}>
                            <Suspense fallback={<div>...loading</div>}>
                                {/* <Route components={states[0].component} /> */}
                                    <RouteComponents states={states} />
                            </Suspense>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </main>
            <footer className='footer'></footer>
        </section>
        // </Router>
    );
};
const getStyle = {
    wrapper: {
        overflowY: 'scroll',
        padding: '1rem'
    }
};
export default Dashboard;