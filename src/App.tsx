import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import state, { StatePropsType } from './components/state';

type AppType = {
  state: StatePropsType
}


const App = (props: AppType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs"
            render={() => <Dialogs
              dialogs={props.state.dialogs}
              messages={props.state.messages}
              posts={props.state.posts} />} />

          <Route path="/profile"
            render={() => <Profile posts={props.state.posts} />} />
        </div>
      </div>
    </BrowserRouter>
  );
};




export default App;
