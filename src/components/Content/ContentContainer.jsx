import React from 'react';
import { addPostActionCreator, changePostBllActionCreator } from '../../redux/content-reducer';
import Content from './Content';
import StoreContext from '../../StoreContext';
const ContentContainer = (props) =>{
    
    return(
        <StoreContext.Consumer> 
        { (store) =>{
            let state = store.getState();
            let addPost = () =>{
                store.dispatch( addPostActionCreator() )
            }

            let onChangePost = (text) =>{
                let action =  changePostBllActionCreator(text);
                store.dispatch(action);
            }

            
            return <Content changePostBLL={ onChangePost } 
            addPost = { addPost } 
            posts = { state.contentPage.posts} 
            newTextPost = { state.newTextPost} />
                }
            }

        </StoreContext.Consumer>

    )
}

export default ContentContainer;