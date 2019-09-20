import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import  { initList, resetList } from '../redux/actions/list.action';
import restApi from '../service/rest.api';
// console.log(restApi)
const Test = (props) => {
    const list = useSelector(state => state.list);
    const dispatch = useDispatch();
    const useReduxHooks = (e) => {
        // e.preventDefault();
        dispatch(initList('this is new action'));
    }
    const resetState = (e) => {
        dispatch(resetList())
    }
    // const oldState = (e)=>{
    //     dispatch({type: 'REHYDRATE'})
    // }
    useEffect(() => {
        restApi().get('artists/?page=0').then(
            response => {
                console.log(response)
            }
        ).catch( err =>{
            console.log(err)
        })
        // Update the document title using the browser API
        return function cleanComponent() {
            console.log('clean')
            resetState();
        }
    }, []);
    return (
        <React.Fragment>
            <div>
                <p>{list}</p>
                <button onClick={() => useReduxHooks()}  >"newState"</button>
            </div>
            <div>
                <p>{list}</p>
                {/* <button onClick={() => resetState()}  >"reset"</button> */}
            </div>
            <div>
                <p>{list}</p>
                {/* <button onClick={() => oldState()}  >oldState</button> */}
            </div>
        </React.Fragment>
    )
}
export default Test;