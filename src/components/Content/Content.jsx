import style from './Content.module.css';
import React from 'react';
import Post from './Post/Posts';

import ProfileStatus from './ProfileStatus/ProfileStatus';
import { Field, reduxForm } from 'redux-form';

const Content = (props) =>{

    
    let postsElement = props.posts.map( p=> <Post message={p.post} countLikes={p.countLikes} ></Post>)
    
    let onAddPost = (value) =>{
        props.addPost(value.newPostText);
    }

    return(
        <div className={style.content_style}>
            <div> 
                <ProfileStatus></ProfileStatus>
                <AddNewPostFormReduxForm onSubmit={onAddPost}></AddNewPostFormReduxForm>
                { postsElement }
            </div>
        </div>
    )
}

const AddNewPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name='newPostText'/>
            <button>Add post</button>
        </form>
    )
}

const AddNewPostFormReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default Content;