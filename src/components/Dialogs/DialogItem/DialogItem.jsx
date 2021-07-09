import { NavLink } from 'react-router-dom'
import rename from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={rename.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem