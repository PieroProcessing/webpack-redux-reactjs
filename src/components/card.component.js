import React from 'react';
import Card from 'antd/es/card';

const CardWrapper = (props) => {
    // console.log(props)
    const { id, body, title, user_id } = props.model;
    return (
        <Card title={title} bordered={true} style={getStyle.wrapper} >
            <p >{body}</p>
        </Card>
    )
}
const getStyle = {
    wrapper: {
        padding: '.5rem .5rem',
    },
    container: {
    }
}
export default CardWrapper;