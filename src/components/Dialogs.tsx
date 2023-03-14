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
  let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
]

let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>) 

  let messagesData = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'What are your doing?'},
  {id: 4, message: 'hi'},
  {id: 5, message: 'hi'},
]

let messagesElements = messagesData.map(m => <Message message={m.message}/>)
  

  return (
    <div className={s.dialogs}>
     <div className={s.dialogsItems}>
      <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
      <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
      <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
      <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
      <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
      <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
      {dialogsElements}
     </div>
       <div className={s.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        <Message message={messagesData[2].message}/>
       </div>
    </div>
  );
};










export default Dialogs;
