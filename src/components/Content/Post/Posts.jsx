import React from 'react';


const Post = (props) => {
    return(
        <div>
            <div> {props.message}  </div>
            <div> like {props.countLikes}</div>
        </div>
    )
}


export default Post;