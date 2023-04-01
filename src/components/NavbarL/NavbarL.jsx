import style from './NavbarL.module.css';
import girl from '../../images/navbarfoto/girl.png'



const NavbarL = () =>{
    return (
        <div className={style.navbarL_style}>
            <div className={style.block}>
                <div className={style.imggg}>
                    <img className={style.img_girl} src={girl} alt="error" />
                </div>
            </div>
            <div className={style.descr}>
                <h4>Mary</h4>
                <p>Design, model</p>
            </div>
            <span className={style.spaN}></span>
            <div className={style.folowers}>
                <h4>Following</h4>
                <p>34</p>
            </div>
            <span className={style.spaN}></span>
            <div className={style.folowers}>
                <h4>Followers</h4>
                <p>140</p>
            </div>
            <span className={style.spaN}></span>
        </div>
    );
}

export default NavbarL;