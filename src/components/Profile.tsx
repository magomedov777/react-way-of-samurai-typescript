import React from 'react';
import MyPosts from './MyPosts';
import s from './Profile.module.css';


const Profile = () => {
  return (
    <div>
           <div>
            <img src='https://www.gannett-cdn.com/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp'/>
           </div>
           <div>
             avatar + description
           </div>
           <MyPosts/>
        </div>
  );
};


export default Profile;
