import React from 'react';
import MyPosts from './MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo';


const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts/>
    </div>
  );
};


export default Profile;
