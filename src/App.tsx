import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import {BrowserRouter, Route} from 'react-router-dom';




const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
       <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path="/dialogs" component={Dialogs}/>
          <Route path="/profile" component={Profile}/>
          </div>
        </div>
     </BrowserRouter>
  );
};




export default App;
