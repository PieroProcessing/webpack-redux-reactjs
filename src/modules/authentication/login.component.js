import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../../redux/actions/authentication.action';
import restApi from '../../service/rest.api';

const call = restApi();

const Login = (props) => {
    const [model, setModel] = useState({ username: '', password: '' });
    const dispatch = useDispatch();
    // console.log('props', props)
    const loginHandler = (e) => {
        e.persist();
        setModel(model => ({ ...model, [e.target.name]: e.target.value }));
    }
    // 
    const loginSubmit = (event) => {
        // console.log(event)
        if (event) event.preventDefault();
        // call.post('auth-rest/login/', model).then(
        //     response => {
        //         // console.log('response on ',response)
        //         var data = Object.assign({}, response.data, { isLogged: true })
        //         dispatch(setUserData(data));
        //         props.history.push(`/dashboard/main/`)
        //     }
        // ).catch(
        //     err => {
        //         console.log(err)
        //     }
        // );
        dispatch(setUserData({isLogged: true}));
        props.history.push('/dashboard/post/')

    }
    return (
        <section className='grid--auth'>
            <form name="form" className='login' onSubmit={(event)=> loginSubmit(event)} >
                <input type='text' name='username' className='input' onChange={(e) => loginHandler(e)} value={model.username} />
                <input type='password' name='password' className='input' onChange={(e) => loginHandler(e)} value={model.password} />
                <input type='submit' className='input--submit_login' value='Submit' />
                {/* <button onClick={(e) => loginSubmit(e)} /> */}
            </form>
        </section>
    )
}

export default Login;