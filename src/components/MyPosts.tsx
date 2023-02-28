import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post';


const MyPosts = () => {
  return (
    <div>
        My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                
            </div>
            <div className={s.posts}>
           <Post message={'Hello'} likes={17}/>
           <Post message={'How are you?'} likes={27}/>
        </div>
    </div>
  )
}




export default MyPosts;