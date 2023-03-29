import style from './Header.module.css';
import img from '../../images/logo/japanLOGO.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
const Header = () =>{
    return(
        <div className={style.header_style}>
            <div className={style.conteiner}>
                <div className={style.wraper_logo}>
                    <img className={style.imglogo} src={img} alt="error" />
                </div>
                <div>
                    <input className={style.input_text} type="text" placeholder='Search ...'/>
                </div>         
                <nav>
                    <ul className={style.awesome_contein}>
                        <li>                  
                            <a className={style.awesome_link} href="#" >
                                <FontAwesomeIcon icon={faHome} />
                                <p>Home</p>
                            </a>
                        </li>
                        <li>
                            <a className={style.awesome_link} href="#" >
                                <FontAwesomeIcon icon={faUser} />
                                <p>Profiles</p>
                            </a>
                        </li>
                        <li>
                            <a className={style.awesome_link} href="#" >
                                <FontAwesomeIcon icon={faMessage} />
                                <p>Messages</p>
                            </a>
                        </li>
                        <li>
                            <a className={style.awesome_link} href="#" >
                                <FontAwesomeIcon icon={faBuilding} />
                                <p>Companies</p>
                            </a>
                        </li>
                        <li>
                            <a className={style.awesome_link} href="#" >
                                <FontAwesomeIcon icon={faDiagramProject} />
                                <p>Projects</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        
    );
}

export default Header;