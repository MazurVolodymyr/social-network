
import { addPostActionCreator } from '../../redux/content-reducer';
import Content from './Content';

import { connect } from 'react-redux';
// import { setStatus, updateStatus } from '../../redux/content-reducer';
let mapStateToProps = (state) =>{
    return {
        posts: state.contentPage.posts,
        newTextPost: state.contentPage.newTextPost,
        // status: setStatus,
        // updateStatus: updateStatus,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: (newPostText) =>{
            dispatch( addPostActionCreator(newPostText) )
        },
    }
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer;