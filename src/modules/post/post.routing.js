 import React from 'react';
const  Post = React.lazy(()=> import(/* webpackChunkName: 'post'*/ '../post/post.component'));
export default {
    name:'post',
    url:'/post/',
    component: Post
}