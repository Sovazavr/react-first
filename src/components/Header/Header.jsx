import { NavLink } from 'react-router-dom';
import rename from './Header.module.css'
import Button from '@material-ui/core/Button';

const Header = (props) => {
  return (
    <header className={rename.Head}>
      
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