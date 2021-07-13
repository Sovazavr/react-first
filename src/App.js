import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';



const App = (props) => {

  return (
   
      <div className='app-wrapper'>
        <Header />

        <Navbar />


        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() =>
            <Dialogs
              messages={props.state.messagesPage.messages}
              dialogs={props.state.messagesPage.dialogs} />} />
          <Route path='/profile' render={() =>
            <Profile
              posts={props.state.profilePage.posts}
              newPostText={props.state.profilePage.newPostText}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    
  );
}


export default App;
