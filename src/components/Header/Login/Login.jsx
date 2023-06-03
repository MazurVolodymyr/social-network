import { Link } from "react-router-dom"
import React from "react"

const Login = (props) =>{
    return(
        <div> 
            { props.isAuth 
                ? <div>{props.login} <button onClick={props.logout}>log out</button></div> 
                : <Link to={'/login'}> Login </Link> 
            }
        </div>
    )
}
export default Login