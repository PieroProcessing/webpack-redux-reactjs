import React, { Fragment, useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterList } from '../../redux/actions/filteredList.action';
import Search from '../../components/search.component';
import CardWrapper from '../../components/card.component';
import { getFilteredPost, getPost } from './post.service';


const Post = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.list);
    const term = useSelector(state => state.search);
    const filtered = useSelector(state => state.filtered);

    useEffect(() => { getArtist(dispatch) }, [])
    useEffect(() => { if (Object.entries(list).length != 0) { dispatch(filterList('title', term, list)) } }, [term, list])

    const submitHandler = () => {
        if (term) {
            getFilteredPost(dispatch, 'title', term);
            // dispatch(resetSearch())
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