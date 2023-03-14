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
      <DialogItem name={'Andrew'} id={2}/>
      <DialogItem name={'Sveta'} id={3}/>
      <DialogItem name={'Sasha'} id={4}/>
      <DialogItem name={'Victor'} id={5}/>
      <DialogItem name={'Valera'} id={6}/>
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
