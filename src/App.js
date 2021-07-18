import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

import { BrowserRouter, Route } from 'react-router-dom'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import React, { useState } from 'react'
import DialogsContainer from './components/Dialogs/DialogsContainer'

const App = (props) => {
  

  return (
  
    <div className='app-wrapper'>
      <Header />

      <Navbar />


      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() =>
          <DialogsContainer
            // messages={props.state.messagesPage.messages}
            // dialogs={props.state.messagesPage.dialogs} 
            store={props.store} />} />
        <Route path='/profile' render={() =>
          <Profile store={props.store} />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
    
   
  );
}


export default App;
