import style from './Content.module.css';
import React from 'react';
import Post from './Post/Posts';

import { addPostActionCreator, changePostBllActionCreator } from '../../redux/content-reducer';

const Content = (props) =>{

    
    let postsElement = props.contentPost.map( p=> <Post message={p.post} countLikes={p.countLikes} ></Post>)

    let postRef = React.createRef();
    
    let addPost = () =>{
        //props.addPost();
        props.dispatch( addPostActionCreator() )
    }

    let onChangePost = () =>{
        let text = postRef.current.value;
        //props.changePostBLL(text);
        let action =  changePostBllActionCreator(text);
        props.dispatch(action);
    }

    return(
        <div className={style.content_style}>
            <div> 
                <textarea ref={ postRef } value={ props.newTextPost } onChange={ onChangePost }></textarea>
                <button onClick={ addPost }>Add post</button>
                { postsElement }

            </div>
        </div>
    )
}

export default Content;