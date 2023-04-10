import style from './Content.module.css';
import React from 'react';
import Post from './Post/Posts';

const Content = (props) =>{
    
    let postsElement = props.contentPost.map( p=> <Post message={p.post} countLikes={p.countLikes} ></Post>)

    let postRef = React.createRef();
    
    let addPost = () =>{
        let text = postRef.current.value;
        props.addPost(text);
        postRef.current.value = '';
    }


    return(
        <div className={style.content_style}>
            <div> 
                <textarea ref={ postRef }></textarea>
                <button onClick={ addPost }>Add post</button>
                {postsElement}

            </div>
        </div>
    )
}

export default Content;