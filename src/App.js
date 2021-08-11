import './App.css';
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import { connect} from 'react-redux'
import {  Route, withRouter } from 'react-router-dom'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import React from 'react'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login'
import { Component } from 'react';
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';
import MiniDrawer from './components/LeftNavPanel/Panel'

class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
     
          <div className='app-wrapper'>
            {/* <MiniDrawer/> */}
            <HeaderContainer />

            <Navbar />


            <div className='app-wrapper-content'>
              <Route path='/dialogs' render={() =>
                <DialogsContainer />} />
              <Route path='/profile/:userId?' render={() =>
                <ProfileContainer />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/settings' render={() => <Settings />} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/login' render={() => <Login />} />
            </div> 
          </div>
        

    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(withRouter, connect
  (mapStateToProps, { initializeApp }))(App);
