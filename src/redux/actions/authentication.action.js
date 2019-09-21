import { AUTH } from '../constants/authentication';

function getToken(){
    return{
        type: AUTH.GET_TOKEN,
    };
}
function setUserData(data){
    return{
        type: AUTH.SET_USER_DATA,
        payload: data,
    };
}
function resetAuthentication(){
    return{
        type: AUTH.RESET_AUTHENTICATION,
    };
}

export { getToken,setUserData,resetAuthentication };