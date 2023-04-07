import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post';
import { PostsType, StatePropsType } from './state';

type MyPostsType = {
  posts: PostsType[]
}
const MyPosts = (props: MyPostsType) => {
 let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)
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
        </div>
    </div>
  )
}




export default MyPosts;