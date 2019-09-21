import React from 'react';
const Post = React.lazy(()=> import(/* webpackChunkName: 'post'*/ './post.component'));
// import {Post} from '../post/post.component'
export default {
    name:'post',
    url:'/post/',
    component: Post
};