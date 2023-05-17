import Preloader from "../common/Preloader/Preloader"


const Profiles =(props) =>{

    if(!props.profile){
        return <Preloader />
    }

    return(
        <div>
            <img src={props.profile.photos.small } alt="err" />
        </div>
    )
}

export default Profiles