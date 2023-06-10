import style from './Content.module.css';
import React from 'react';
import Post from './Post/Posts';

import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';

import { Textarea } from '../common/FormControls/FormControls';

import ProfileStatusHook from './ProfileStatus/ProfileStatusHook';
const Content = (props) =>{

    
    let postsElement = props.posts.map( p=> <Post message={p.post} countLikes={p.countLikes} ></Post>)
    
    let onAddPost = (value) =>{
        props.addPost(value.newPostText);
    }

    return(
        <div className={style.content_style}>
            <div> 
                <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}></ProfileStatusHook>
                <AddNewPostFormReduxForm onSubmit={onAddPost}></AddNewPostFormReduxForm>
                { postsElement }
            </div>
        </div>
    )
}

const AddNewPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='newPostText' validate={[required, maxLengthCreator(20)]} placeholder='post messages'/>
            <button>Add post</button>
        </form>
    )
}

const AddNewPostFormReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default Content;