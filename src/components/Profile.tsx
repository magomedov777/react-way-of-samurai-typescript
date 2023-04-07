import React from 'react';
import MyPosts from './MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo';


const Profile = (props: any) => {
 
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.posts}/>
    </div>
  );
};


export default Profile;
