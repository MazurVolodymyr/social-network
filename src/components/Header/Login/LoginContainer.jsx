
import React from "react"
import Login from "./Login"
import { connect } from "react-redux"
import { getAuthUserData } from "../../../redux/auth-reducer"
import { logout } from "../../../redux/auth-reducer"

class LoginContainer extends React.Component {

    componentDidMount(){
        this.props.getAuthUserData()
    }
    render(){
        return(
            <div><Login {...this.props}></Login></div>
        )
    }

}

let mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect (mapStateToProps, {getAuthUserData, logout}) (LoginContainer)