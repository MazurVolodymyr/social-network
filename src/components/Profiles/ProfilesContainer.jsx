import React from "react";
import Profiles from "./Profiles"
import axios from "axios";
import { connect } from "react-redux";

import { setUserProfile } from "../../redux/content-reducer";

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response =>{
            this.props.setUserProfile(response.data)
        })
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

export default  connect (mapStateToProps, {setUserProfile}) ( WithURLProfilesContainer)