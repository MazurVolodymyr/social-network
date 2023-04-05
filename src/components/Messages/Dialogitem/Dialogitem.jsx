import { Link } from 'react-router-dom';
import style from '../Messages.module.css'
const Dialogitem = (props) => {
    return (
        <Link to= {"dialogs" + props.id} className={style.dialog_with_people}>{props.name}</Link>
    )
}

export default Dialogitem;