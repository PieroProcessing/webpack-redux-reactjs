// import Artists from './artists.component';
import React from 'react';
const  Artists = React.lazy(()=> import(/* webpackChunkName: 'artists'*/ '../artists/artists.component'));
export default {
    name:'artists',
    url:'/artists/',
    component: Artists
}