import { follow, setUsers, unfollow, setCurrentPage, setUsersTotalCount,toggleIsFetching } from "../../redux/users-reducer";
import { connect } from "react-redux";

import React from "react";
import Users from "./Users";

import Preloader from "../common/Preloader/Preloader";
import { getUsers } from "../../API/api";

class UsersAPIComponent extends React.Component {

    componentDidMount(){
        this.props.toggleIsFetching(true)

        getUsers(this.props.currentPage, this.props.pageSize).then(data =>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            // this.props.setTotalUsersCount(response.data.totalCount)
            //totalUsersCount зробив фіксовано тому що юзерів зараз десятки тисяч
        })
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        getUsers(pageNumber, this.props.pageSize).then(data =>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            

        })
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
            />
        </>
    }
}




const mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching})(UsersAPIComponent)


export default UsersContainer