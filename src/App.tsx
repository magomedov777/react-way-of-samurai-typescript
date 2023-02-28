import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg'/>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
       
      </nav>
      <div className='content'>
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
      <div>
        Post 1
      </div>
      <div>
        Post 2
      </div>
    </div>
      </div>
    
    </div>
  );
};




export default App;
