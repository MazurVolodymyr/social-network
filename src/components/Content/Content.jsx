import style from './Content.module.css';
import React from 'react';
import Post from './Post/Posts';

const Content = (props) =>{
    
    let postsElement = props.contentPost.map( p=> <Post message={p.post} countLikes={p.countLikes} ></Post>)

    let postRef = React.createRef();
    
    let addPost = () =>{
        props.addPost();
    }

    let onChangePost = () =>{
        let text = postRef.current.value;
        props.changePostBLL(text);
    }

    return(
        <div className={style.content_style}>
            <div> 
                <textarea ref={ postRef } value={ props.newTextPost} onChange={onChangePost}></textarea>
                <button onClick={ addPost }>Add post</button>
                {postsElement}

            </div>
        </div>
    )
}

export default Content;