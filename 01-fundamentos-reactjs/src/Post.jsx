import React from 'react'

const Post = (props) => {
    return(<div>
        <h3>{props.author}</h3>
        <h5>{props.content}</h5>
    </div>);
}

export default Post;