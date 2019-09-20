import axios from "axios";
import reduxStore from '../redux/store';
const redux = reduxStore();
const restApi = ()=> {
    // let token = useSelector(state => state.auth.token)
    const token = redux.store.getState().auth.key;
    console.log('token',token)
    const defaultOptions = {
        baseURL:  "https://jsonplaceholder.typicode.com/",
        cache: true, // todo: verify utility
    }
    const instance = axios.create(defaultOptions);
    // Set the AUTH token for any request

    instance.interceptors.request.use(request => {
        // console.log(request);
        request.headers.Authorization = token ? 'Token '+token : null;
        console.log('request', request);
        // Edit request config
        return request;
    }, error => {
        // console.log(error);
        return Promise.reject(error);
    });

    instance.interceptors.response.use(response => {
        // console.log(response);
        // Edit response config
        return response;
    }, error => {
        // console.log(error);
        return Promise.reject(error);
    });
    return instance
}

export  default restApi ;