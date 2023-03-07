import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';



const App = () => {
  return (
    <div className='app-wrapper'>
       <Header/>
        <Navbar/>
         {/* <Profile/> */}
         <div className='app-wrapper-content'>
          <Dialogs/>
         </div>
          
  </div>
  );
};




export default App;
