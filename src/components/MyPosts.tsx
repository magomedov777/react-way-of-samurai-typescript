import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post';


const MyPosts = () => {
  let postsData = [
    {id: 1, message: 'Good morning', likes: 17},
    {id: 2, message: 'What do your doing?', likes: 27},
    ]
  return (
    <div className={s.postsBlock}>
        <h3>My posts</h3>My posts
            <div>
              <div>
                <textarea></textarea>
              </div>
              <div>
                <button>Add post</button>
              </div>
            </div>
            <div className={s.posts}>
           <Post message={'Hello'} likes={17}/>
           <Post message={'How are you?'} likes={27}/>
        </div>
    </div>
  )
}




export default MyPosts;