import style from "./Preloader.module.scss"
import loading from "../../../images/loader/loader.gif"

const Preloader = (props) =>{
    return (
        <div className={style.preloader}>
            <img src={loading} alt="" className={style.preloader__image}></img>/
        </div>
    )
}

export default Preloader