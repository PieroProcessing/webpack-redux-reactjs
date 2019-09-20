// import Collectables from './collectables.component';
import React from 'react';
const  Collectables = React.lazy(()=>import(/* webpackChunkName: 'collectable'*/ '../collectables/collectables.component'));
export default {
    name:'collectables',
    url:'/collectables/',
    component: Collectables
}