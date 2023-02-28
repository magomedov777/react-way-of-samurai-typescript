import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className='app-wrapper'>
       <Header/>
          <Navbar/>
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
