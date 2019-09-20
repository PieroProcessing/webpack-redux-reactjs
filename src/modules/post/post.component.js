import React, { Fragment, useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../../components/search.component';
import CardWrapper from '../../components/card.component';
import { getFilteredPost, getPost } from './post.service';
import {escapeRegExp} from '../../service/utils';

const Post = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.list);
    const term = useSelector(state => state.search);
    const [filtered,setFiltered] = useState([])

    useEffect(() => { getPost(dispatch) }, [])
    useEffect(() => { if (Object.entries(list).length != 0) { 
        let results = (term)? list.filter(       
            (item)=> {return !item['title'].toLowerCase().search(escapeRegExp(term).toLowerCase())}
        ): list;
        setFiltered(results);
    } }, [term, list])

    const submitHandler = () => {
        if (term) {
            getFilteredPost(dispatch, 'title', term);
        } else {
            getPost(dispatch);
        }

    }

    return (
        <Fragment>
            <Search onSubmit={() => submitHandler()} />
            <div style={getStyle.wrapper}>
                {
                    filtered.map((item) => <CardWrapper key={item.id} model={item} />)
                    // filtered
                }
            </div>
        </Fragment>
    )
}

const getStyle = {
    wrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr)',
        gridGap: '1rem',
        padding: '1rem',
    }
}
export default Post;