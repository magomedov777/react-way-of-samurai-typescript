import React from 'react';
import s from './Dialogs.module.css';
import { StatePropsType } from './state';

type MessageType = {
    messages: string
}
const Message = (props:MessageType ) => {
    return (<div className={s.message}>{props.messages}</div>)}



export default Message;