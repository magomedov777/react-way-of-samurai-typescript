import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props: any) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      <div className={s.dialog + ' ' + s.active}>
          Dima
        </div>
        <div className={s.dialog}>
          Andrew
        </div>
        <div className={s.dialog}>
          Sveta
        </div>
        <div className={s.dialog}>
          Sasha
        </div>
        <div className={s.dialog}>
          Victor
        </div>
        <div className={s.dialog}>
          Valera
        </div>
      </div>
      <div className={s.messages}>
      <div className={s.message}>Hello!</div>
      <div className={s.message}>How are you?</div>
      <div className={s.message}>What are your doing?</div>
      </div>
    </div>
  )
}










export default Dialogs;
