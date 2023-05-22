import { Link } from "react-router-dom"
import React from "react"



const Login = (props) =>{
    return(
        <div> 
            { props.isAuth ? props.login : <Link to={'/login'}> Login </Link> }
        </div>
    )
}
export default Login