import React from 'react';
import s from './Post.module.css'


type PropsPostType = {
    message: String,
    likes: Number
};

const Post = (props: PropsPostType) => {
  return (
    <div className={s.item}>
    <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
      <div>
      {props.message}
      </div> 
      
      <div>
        <>likes{props.likes}</>
      </div>
    </div>
  )
}






export default Post;