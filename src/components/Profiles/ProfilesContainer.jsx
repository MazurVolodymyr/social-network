import React from "react";
import Profiles from "./Profiles"
import { connect } from "react-redux";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { setUserId } from "../../redux/content-reducer";

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
    }

    render(){
        return(
            <Profiles {...this.props} profile={this.props.profile} /> 
        )
    }
} 

let mapStateToProps = (state) =>({
    profile: state.contentPage.profile
})
 
let WithURLProfilesContainer = withRouter(ProfilesContainer)

export default  connect (mapStateToProps, {setUserId} ) ( WithURLProfilesContainer)