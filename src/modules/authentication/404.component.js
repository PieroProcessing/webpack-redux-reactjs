import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = ()=>{
    return (
        <div>
            Page not found!
            <NavLink to="/login"></NavLink>
        </div>
    );
};

export default NotFound;