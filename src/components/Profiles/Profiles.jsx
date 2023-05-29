import Preloader from "../common/Preloader/Preloader"
import ProfileStatus from "../Content/ProfileStatus/ProfileStatus"
const Profiles =(props) =>{

    if(!props.profile){
        return <Preloader />
    }


    return(
        <div>
            <img src={props.profile.photos.small } alt="err" />
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
    )
}

export default Profiles