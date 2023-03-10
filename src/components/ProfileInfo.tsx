import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
        <div>
            <img src='https://www.gannett-cdn.com/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp'/>
        </div>
        <div className={s.descriptionBlock}>
             avatar + description
        </div>
    </div>
  );
};


export default ProfileInfo;