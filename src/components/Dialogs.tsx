import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

type DialogItemPropsType = {
  name: string
  id: Number
};

type MessageType = {
  message: string
};

const DialogItem = (props: DialogItemPropsType) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
  );
};

const Message = (props: MessageType) => {
  return (<div className={s.message}>{props.message}</div>)}

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

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) 

let messagesElements = messages.map(m => <Message message={m.message}/>)
  return (
    <div className={s.dialogs}>
     <div className={s.dialogsItems}>
      <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
      <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
      <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>
      <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>
      <DialogItem name={dialogs[4].name} id={dialogs[4].id}/>
      <DialogItem name={dialogs[5].name} id={dialogs[5].id}/>
      {dialogsElements}
     </div>
       <div className={s.messages}>
        <Message message={messages[0].message}/>
        <Message message={messages[1].message}/>
        <Message message={messages[2].message}/>
       </div>
    </div>
  );
};










export default Dialogs;
