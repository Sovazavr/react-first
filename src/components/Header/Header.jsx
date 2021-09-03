import { NavLink } from 'react-router-dom';
import rename from './Header.module.css'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SettingsIcon from '@material-ui/icons/Settings';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const Header = (props) => {
  return (
    <header className={rename.Head}>
       <ButtonGroup
          orientation="horizontal"
          color="primary"
          aria-label="horizontal contained primary button group"
          variant="text"
        >
          <Button>
            <NavLink to='/profile' activeClassName={rename.active}><AccountCircleIcon fontSize="large"/></NavLink>
          </Button>
          <Button>
            <NavLink to='/users' activeClassName={rename.active}><PeopleIcon  fontSize="large"/></NavLink>
          </Button>
          <Button>
            <NavLink to='/dialogs' activeClassName={rename.active}><ChatIcon  fontSize="large"/></NavLink>
          </Button>
          <Button>
            <NavLink to='/news' activeClassName={rename.active}><NewReleasesIcon  fontSize="large"/></NavLink>
          </Button>
          <Button>
            <NavLink to='/music' activeClassName={rename.active}><MusicNoteIcon  fontSize="large"/></NavLink>
          </Button>
          <Button>
            <NavLink to='/settings' activeClassName={rename.active}><SettingsIcon  fontSize="large"/></NavLink>
          </Button>
          
        </ButtonGroup>

      {/* <img className={rename.header_img} src='https://png.pngtree.com/element_our/md/20180506/md_5aeedf0005b7a.png' /> */}
      <div className={rename.loginBlock}>
        

          {props.isAuth ? <><div><Button variant="text" onClick={props.logout}><MeetingRoomIcon fontSize="large"/></Button> </div></> :
        <NavLink to={'/login'}>Login</NavLink>
        // <div>{props.login}</div>
        }
        
      </div>
    </header>
  )
}

export default Header;