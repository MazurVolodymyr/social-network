import Preloader from "../common/Preloader/Preloader"
import ProfileStatusHook from "../Content/ProfileStatus/ProfileStatusHook"

const Profiles =(props) =>{

    if(!props.profile){
        return <Preloader />
    }

    return(
        
        <div>
            <img src={props.profile.photos.small } alt="err" />
            <ProfileStatusHook status={props.status} updateStatus={props.updateStatus} />
        </div>
    )
}

export default Profiles