import React from 'react';
import style from './Messages.module.css';
import Dialogitem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

const Messages = (props) => {

    let state = props.messagesPage;
    
    let dialogsElements = state.dialogsData.map ( d => <Dialogitem id={d.id} key={d.id} name = {d.name}  />)
    let messagesElements = state.messagesData.map (e => <Message text= {e.text} key={e.id}/>)


    let addNewMessages = (value) =>{
        props.sendMessage(value.newMessagesBody);
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
                    <AddMesagesFormRedux onSubmit={addNewMessages}></AddMesagesFormRedux>
                </div>
            </div>
        </div>
    )
}

const AddMesagesForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessagesBody" placeholder='enter your message'/>
                <button>send</button> 
            </div>
        </form>
    )
}

const AddMesagesFormRedux = reduxForm({form: "dialogAddMesagesForm"})(AddMesagesForm)

export default Messages;