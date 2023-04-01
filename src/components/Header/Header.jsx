import style from './Header.module.css';
import img from '../../images/logo/japanLOGO.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


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
                            <Link to="Content" className={style.awesome_link} >
                                <FontAwesomeIcon icon={faHome} />
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="Profiles" className={style.awesome_link} >
                                <FontAwesomeIcon icon={faUser} />
                                <p>Profiles</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="Messages" className={style.awesome_link} >
                                <FontAwesomeIcon icon={faMessage} />
                                <p>Messages</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="Companies" className={style.awesome_link} >
                                <FontAwesomeIcon icon={faBuilding} />
                                <p>Companies</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="Projects" className={style.awesome_link} >
                                <FontAwesomeIcon icon={faDiagramProject} />
                                <p>Projects</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="Music" className={style.awesome_link} >
                                <FontAwesomeIcon icon={faMusic} />
                                <p>Music</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        
    );
}

export default Header;