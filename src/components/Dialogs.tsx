import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';

export type DialogItemPropsType = {
  name: string
  id: Number
};

export type MessageType = {
  message: string
};

const Dialogs = (props: DialogItemPropsType) => {
  let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
]

let messages = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'What are your doing?'},
  {id: 4, message: 'hi'},
  {id: 5, message: 'hi'},
]

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>); 

let messagesElements = messages.map(m => <Message message={m.message}/>);
  return (
    <div className={s.dialogs}>
     <div className={s.dialogsItems}>
       {dialogsElements}
     </div>
       <div className={s.messages}>
        {messagesElements}
       </div>
    </div>
  );
};










export default Dialogs;
