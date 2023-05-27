import React from "react";
import { Navigate } from "react-router-dom";

export const withAuthRedarect = (Component) => {
    class RedirectComponent extends React.Component{
        render(){
            if(this.props.isAuth === false) {
                return <Navigate to={"/IsYou"} />
            } 
            return <Component {...this.props}/>
        }
    }
    return RedirectComponent
}