import style from './Content.module.css';
import React from 'react';
import Post from './Post/Posts';


const Content = (props) =>{

    console.log(props);
    let postsElement = props.posts.map( p=> <Post message={p.post} countLikes={p.countLikes} ></Post>)
    
    let postRef = React.createRef();
    
    let onAddPost = () =>{
        props.addPost();
    }

    let onChangePost = () =>{
        let text = postRef.current.value;
        props.changePostBLL(text);

    }

    return(
        <div className={style.content_style}>
            <div> 
                <textarea ref={ postRef } value={ props.newTextPost } onChange={ onChangePost }></textarea>
                <button onClick={ onAddPost }>Add post</button>
                { postsElement }

            </div>
        </div>
    )
}
export default Content;