import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../../components/search.component';
import CardWrapper from '../../components/card.component';
import { getPost, getTodos } from './post.service';
import { escapeRegExp } from '../../service/utils';
import Select from 'antd/es/select';
import { resetSearch } from '../../redux/actions/search.action';
import { resetTodos } from '../../redux/actions/todos.action';
import { resetList } from '../../redux/actions/list.action';
const { Option } = Select;

const Post = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.list);
    const term = useSelector(state => state.search);
    const todos = useSelector(state => state.todos);

    const [filtered, setFiltered] = useState([]);
    const [selected, setSelected] = useState('posts');
    const [displayed, setDisplayed] = useState(list);
    const clearComponent = ()=>{
        dispatch(resetList());
        dispatch(resetTodos())
    }
    useEffect(() => { 
        getPost(dispatch); 
        getTodos(dispatch) 
        return ()=> clearComponent();
    }, [dispatch]);
    useEffect(() => {
        if (selected == 'posts')
            setDisplayed(list)
        else
            setDisplayed(todos)
    }, [selected, list, todos])
    useEffect(() => {
        console.log('results', displayed)
        if (displayed.length != 0) {
            let results = term ? displayed.filter(
                (item) => { return !item['title'].toLowerCase().search(escapeRegExp(term).toLowerCase()); }
            ) : displayed;
            setFiltered(results);
        }
    }, [term, displayed]);


    const submitHandler = () => {
        console.log('submit called')
        if (term) {
            //method not supported on jsonplaceholder//
            // getFilteredPost(dispatch, 'title', term);
        } else {
            getPost(dispatch);
        }

    };

    const selectHandler = (selected) => {
        console.log('selected changed', selected)
        setSelected(selected);
        dispatch(resetSearch());
    }

    return (
        <Fragment>
            <Search onSubmit={submitHandler} />
            <Select defaultValue="posts" style={getStyle.select} onChange={selectHandler}>
                <Option value="posts">Posts</Option>
                <Option value="todos">Todos</Option>
            </Select>
            <div style={getStyle.wrapper}>
                {
                    filtered.map((item) => <CardWrapper key={item.id} model={item} />)
                }
            </div>
        </Fragment>
    );
};

const getStyle = {
    wrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr)',
        gridGap: '1rem',
    },
    select: {
        margin: '1rem 0',
    }
};
export default Post;