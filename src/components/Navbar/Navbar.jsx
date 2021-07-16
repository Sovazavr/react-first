import { NavLink } from 'react-router-dom';
import rename from './Navbar.module.css'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Navbar = () => {
  return (
    <nav className={rename.Nav}>
      <div className={rename.item}>

        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="text"
        >
          <Button>
            <NavLink to='/profile' activeClassName={rename.active}>Profile</NavLink>
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

      </div>
    </nav >
  )
}

export default Navbar;