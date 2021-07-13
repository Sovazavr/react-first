import rename from './Header.module.css'
import { Switch } from '@material-ui/core'

const Header = (props) => {
  return (
    <header className={rename.Head}>
      
      <img className={rename.header_img} src='https://png.pngtree.com/element_our/md/20180506/md_5aeedf0005b7a.png' />
      <div margin-left= 'auto'>
        <Switch color='#3F51B5' checked={props.darkMode} onChange={() => props.setDarkMode(!props.darkMode)} />
      </div>
    </header>
  )
}

export default Header;