import { NavLink } from 'react-router-dom';
import rename from './Navbar.module.css'



const Navbar = () =>
{
    return(
        <nav className={rename.Nav}>
         <div className={rename.item}>
           <NavLink to='/profile' activeClassName={rename.active}>Profile</NavLink>
         </div>
         <div className={rename.item}>
           <NavLink to='/dialogs' activeClassName={rename.active}>Messages</NavLink>
         </div>
         <div className={rename.item}>
           <NavLink to='/news' activeClassName={rename.active}>News</NavLink>
         </div>
         <div className={rename.item}>
           <NavLink to='/music' activeClassName={rename.active}>Music</NavLink>
         </div>
         <div className={rename.item}>
           <NavLink to='/settings' activeClassName={rename.active}>Settings</NavLink>
         </div>
      </nav>
    )
}

export default Navbar;