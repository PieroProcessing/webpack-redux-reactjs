// Register each state
// import  login  from './modules/authentication/login.routing';
import  collectables  from './modules/collectables/collectables.routing';
import  artists  from './modules/artists/artists.routing';
// const  collectables = React.lazy(()=>import(/* webpackChunkName: 'collectable'*/ '../collectables/collectables.component'));
// const  artists = React.lazy(()=> import(/* webpackChunkName: 'artists'*/ '../artists/artists.component'));
export const states = [
        artists,
        collectables,
]
