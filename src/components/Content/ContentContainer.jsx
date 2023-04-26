import React from 'react';
import { addPostActionCreator, changePostBllActionCreator } from '../../redux/content-reducer';
import Content from './Content';

const ContentContainer = (props) =>{
    
    let state = props.store.getState();

    let addPost = () =>{
        props.store.dispatch( addPostActionCreator() )
    }

    let onChangePost = (text) =>{
        let action =  changePostBllActionCreator(text);
        props.store.dispatch(action);
    }

    return(
        <Content changePostBLL={ onChangePost } 
        addPost = { addPost } 
        posts = { state.contentPage.posts} 
        newTextPost = { state.contentPage.newTextPost} />
    )
}

export default ContentContainer;