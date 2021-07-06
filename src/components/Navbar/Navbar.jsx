import rename from './Navbar.module.css'



const Navbar = () =>
{
    return(
        <nav className={rename.Nav}>
         <div className={rename.item}>
           <a>Profile</a>
         </div>
         <div className={rename.item}>
           <a>Messages</a>
         </div>
         <div className={rename.item}>
           <a>News</a>
         </div>
         <div className={rename.item}>
           <a>Music</a>
         </div>
         <div className={rename.item}>
           <a>Settings</a>
         </div>
      </nav>
    )
}

export default Navbar;