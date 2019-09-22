import restApi from '../../service/rest.api';
import { initList } from '../../redux/actions/list.action';
import {initTodos} from '../../redux/actions/todos.action';

const call = restApi();

const getPost = async (dispatch) => {
    try {
        let res = await call.get('posts/');
        let { data } = res;
        dispatch(initList(data));
    } catch (err) {
        throw new Error(err);
    }
}
const getTodos = async(dispatch) =>{
    try{
        let res = await call.get('todos/');
        let {data} = res;
        dispatch(initTodos(data));
    }catch(err){throw new Error(err)}
}
const getFilteredPost = async (dispatch, param, filter) => {
    try {
        let res = await call.get('posts/?' + param + '=' + filter);
        let { data } = res;
        dispatch(initList(data));
    } catch (err) {
        throw new Error(err);
    }
}
export { getPost, getFilteredPost, getTodos };