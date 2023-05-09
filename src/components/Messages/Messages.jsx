import React from 'react';
import style from './Messages.module.css';
import Dialogitem from './Dialogitem/Dialogitem';
import Message from './Message/Message';

const Messages = (props) => {

    let state = props.messagesPage;
    
    let dialogsElements = state.dialogsData.map ( d => <Dialogitem id={d.id} key={d.id} name = {d.name}  />)
    let messagesElements = state.messagesData.map (e => <Message text= {e.text} key={e.id}/>)
    let newMessagesBody = state.newMessagesBody;

    let sendSMS = () =>{
        props.sendMessage();
    }
    let onNewMessagesChange = (e) =>{

        let body = e.target.value;
        props.updateNewMessagesBody(body);
    }

    return (
        <div className={style.Messages}>
            <p className={style.title_of_dialogs}>Dialogs</p>
            <div className={style.messages_flex}>
                <div className={style.dialogs}>
                    { dialogsElements }
                </div>
                
                <div className={style.messages}>
                    { messagesElements }
                    <div>
                        <div> <textarea value={newMessagesBody} onChange={onNewMessagesChange} ></textarea></div>
                        <div><button onClick={ sendSMS }>send</button> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;