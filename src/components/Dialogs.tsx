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
  return (
    <div className={s.dialogs}>
     <div className={s.dialogsItems}>
      <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
      <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
      <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
      <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
      <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
      <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
     </div>
       <div className={s.messages}>
        <Message message={'Hello'}/>
        <Message message={'How are you?'}/>
        <Message message={'What are your doing?'}/>
       </div>
    </div>
  );
};










export default Dialogs;
