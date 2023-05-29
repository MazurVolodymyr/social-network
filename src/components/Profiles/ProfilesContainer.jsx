import React from "react";
import Profiles from "./Profiles"
import { connect } from "react-redux";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { getStatus, setUserId, updateStatus } from "../../redux/content-reducer";
import { withAuthRedarect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfilesContainer extends React.Component  {
    
    componentDidMount(){
        let userId = this.props.router.params.userId;
        this.props.setUserId(userId)

        this.props.getStatus(userId)
    }

    render(){

        return(
            <Profiles {...this.props} profile={this.props.profile} status={this.props.status} 
            updateStatus={this.props.updateStatus}/> 
        )
    }
} 


let mapStateToProps = (state) =>({
    profile: state.contentPage.profile,
    isAuth: state.auth.isAuth,
    status: state.contentPage.status
})

export default compose(connect (mapStateToProps, {setUserId}), withRouter, withAuthRedarect, getStatus, updateStatus)(ProfilesContainer)

