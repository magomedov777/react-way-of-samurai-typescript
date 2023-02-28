import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
  return (
    <div className={s.profile}>
           <div>
            <img src='https://www.gannett-cdn.com/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp'/>
           </div>
           <div>
             avatar + description
           </div>
            <div>
             My posts
            <div>
             New post
            </div>
            <div className={s.posts}>
            <div className={s.item}>
              Post 1
            </div>
            <div className={s.item}>
              Post 2
            </div>
        </div>
      </div>
    </div>
  );
};


export default Profile;
