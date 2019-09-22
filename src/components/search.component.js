import React, { useState, useRef } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {updateSearch, resetSearch} from '../redux/actions/search.action';

const Search = (props) => {
    const dispatch = useDispatch();
    // const term = useSelector(state => state.search);
    const [term, setTerm] = useState('');
    const form = useRef(null); // to access dom element!
    const searchHandler = (e) => {
        // console.log(e)
        e.persist();
        setTerm(model => { return e.target.value })
        dispatch(updateSearch(e.target.value));
    }
    // todo: search service with two calls filter on the fly and submit call with api search
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        console.log('event form', form)
       
        props.onSubmit();
        //todo: is possible to clear search without call the function?
        // setTerm('')
        // dispatch(updateSearch(''));
    }
    return (
        <form name='form' ref={form} onSubmit={searchSubmitHandler} style={getStyle.wrapper} noValidate>
            <input type='text'
                name='search'
                className='input'
                onChange={(e) => searchHandler(e)}
                title='Search'
                value={term}  />
        </form>
    )
}

const getStyle = {
    wrapper: {
        height: '5rem',
    }
}
export default Search;