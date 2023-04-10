import React from 'react';
import style from './Messages.module.css';
import Dialogitem from './Dialogitem/Dialogitem';
import Message from './Message/Message';

const Messages = (props) => {

    let dialogsElements = props.dialogs.map ( d => <Dialogitem id={d.id} name = {d.name} />)
    let messagesElements = props.messages.map (e => <Message text= {e.text} />)

    return (
        <div className={style.Messages}>
            <p className={style.title_of_dialogs}>Dialogs</p>
            <div className={style.messages_flex}>
                <div className={style.dialogs}>
                    { dialogsElements }
                </div>
                
                <div className={style.messages}>
                    { messagesElements }
                </div>
            </div>
        </div>
    )
}

export default Messages;