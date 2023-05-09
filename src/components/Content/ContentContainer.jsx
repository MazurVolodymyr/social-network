
import { addPostActionCreator, changePostBllActionCreator } from '../../redux/content-reducer';
import Content from './Content';

import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return {
        posts: state.contentPage.posts,
        newTextPost: state.contentPage.newTextPost,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        changePostBLL: (text) => {
            let action =  changePostBllActionCreator(text);
                dispatch(action);
        },
        addPost: () =>{
            dispatch( addPostActionCreator() )
        },
    }
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer;