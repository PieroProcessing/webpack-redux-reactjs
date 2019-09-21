import React from 'react';

const Todos = React.lazy(()=>import(/* webpackChunkName: 'todos'*/ './todos.component'));
// import {Main} from '../main/main.component';
export default {
    name:'todos',
    url:'/todos/',
    component: Todos
};