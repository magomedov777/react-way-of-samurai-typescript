import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post';


const MyPosts = () => {
  let posts = [
    {id: 1, message: 'Good morning', likes: 17},
    {id: 2, message: 'What do your doing?', likes: 27},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likes={p.likes}/>)
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
              {postsElements}
           {/* <Post message={postsData[0].message} likes={postsData[0].likes}/>
           <Post message={postsData[1].message} likes={postsData[1].likes}/> */}
        </div>
    </div>
  )
}




export default MyPosts;