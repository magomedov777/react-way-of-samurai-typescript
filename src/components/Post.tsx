import React from 'react';
import s from './Post.module.css'


type PropsPostType = {
    message: String
};

const Post = (props: PropsPostType) => {
  return (
    <div className={s.item}>
    <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}






export default Post;