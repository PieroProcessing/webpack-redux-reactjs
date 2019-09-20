 import React from 'react';
const  Main = React.lazy(()=>import(/* webpackChunkName: 'main'*/ '../main/main.component'));
export default {
    name:'main',
    url:'/main/',
    component: Main
}