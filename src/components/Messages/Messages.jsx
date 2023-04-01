import React from 'react';
import style from './Messages.module.css';
import { Link, Route, Routes } from 'react-router-dom';

const Dialogitem = (props) => {
    return (
        <Link to= {"/dialogs" + props.id} className={style.dialog_with_people}>{props.name}</Link>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.text}</div>
    )
}

const Messages = () => {
    return (
        <div className={style.Messages}>
            <p className={style.title_of_dialogs}>Dialogs</p>
            <div className={style.messages_flex}>
                <div className={style.dialogs}>
                    <Dialogitem name = "Vova" id="1" />
                    <Dialogitem name = "Bogdan" id="2" />
                    <Dialogitem name = "Oleksandr" id="3" />
                    <Dialogitem name = "Den" id="4" />
                    <Dialogitem name = "Mary" id="5" />
                    <Routes>
                        <Route path='dialogs5/*' element={<Messages />} />
                    </Routes>
                </div>

                <div className={style.messages}>
                    <Message text="Heeey"></Message>
                    <Message text="Come on man i need five million bombs"></Message>
                    <Message text="London is the capital of great Britain"></Message>
                    <Message text="F**k you"></Message>
                    <Message text="Can u come to me this night ?"></Message>
                </div>
            </div>
        </div>
    )
}

export default Messages;