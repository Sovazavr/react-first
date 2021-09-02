import { NavLink } from 'react-router-dom';
import rename from './Header.module.css'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
            <NavLink to='/profile' activeClassName={rename.active}>Profile</NavLink>
          </Button>
          <Button>
            <NavLink to='/users' activeClassName={rename.active}>Users</NavLink>
          </Button>
          <Button>
            <NavLink to='/dialogs' activeClassName={rename.active}>Messages</NavLink>
          </Button>
          <Button>
            <NavLink to='/news' activeClassName={rename.active}>News</NavLink>
          </Button>
          <Button>
            <NavLink to='/music' activeClassName={rename.active}>Music</NavLink>
          </Button>
          <Button>
            <NavLink to='/settings' activeClassName={rename.active}>Settings</NavLink>
          </Button>
          
        </ButtonGroup>

      {/* <img className={rename.header_img} src='https://png.pngtree.com/element_our/md/20180506/md_5aeedf0005b7a.png' /> */}
      <div className={rename.loginBlock}>
        

          {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div> :
        <NavLink to={'/login'}>Login</NavLink>
        }
        
      </div>
    </header>
  )
}

export default Header;