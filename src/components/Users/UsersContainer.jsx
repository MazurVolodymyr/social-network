import { follow, unfollow, setCurrentPage, toggleIsFollowingProgress } from "../../redux/users-reducer";
import { connect } from "react-redux";

import React from "react";
import Users from "./Users";

import Preloader from "../common/Preloader/Preloader";

import { getUsers } from "../../redux/users-reducer";
import { compose } from "redux";
import { withAuthRedarect } from "../../HOC/withAuthRedirect";

import { getPageSize, getUserss, getTotalUsersCount,getCurrentPage, getIsFetching, getFollowingIsProgress  } from "../../redux/users-selectors";

class UsersAPIComponent extends React.Component {

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) =>{
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render () {
        return<>
        {this.props.isFetching ? <Preloader /> : null}
            <Users 
                totalUsersCount={this.props.totalUsersCount}   
                pageSize={this.props.pageSize}   
                currentPage={this.props.currentPage} 
                onPageChanged={this.onPageChanged} 
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingIsProgress={this.props.followingIsProgress}
            />
        </>
    }
}




const mapStateToProps = (state) =>{
    return{
        users: getUserss(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsProgress: getFollowingIsProgress(state),
    }
}

export default compose(withAuthRedarect ,connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers }))(UsersAPIComponent)
