import rename from './Navbar.module.css'



const Navbar = () =>
{
    return(
        <nav className={rename.Nav}>
         <div className={rename.item}>
           <a href='/profile'>Profile</a>
         </div>
         <div className={rename.item}>
           <a href='/dialogs'>Messages</a>
         </div>
         <div className={rename.item}>
           <a href='/news'>News</a>
         </div>
         <div className={rename.item}>
           <a href='/music'>Music</a>
         </div>
         <div className={rename.item}>
           <a href='/settings'>Settings</a>
         </div>
      </nav>
    )
}

export default Navbar;