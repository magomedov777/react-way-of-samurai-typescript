import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';
import { StatePropsType } from './state';


const Dialogs = (props: StatePropsType) => {


let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>); 

let messagesElements = props.messages.map(m => <Message messages={m.message}/>);
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
