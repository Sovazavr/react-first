import { NavLink } from 'react-router-dom'
import rename from './Dialogs.module.css'

const DialogItem = (props) => {
    let path='/dialogs/'+props.id
    return (
        <div className={rename.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={rename.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={rename.dialogs}>

            <div className={rename.dialogs_item}>
                <DialogItem name='Dmitry' id='1'/>
                <DialogItem name='Andrew' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Vadim' id='4'/>
                <DialogItem name='Alexander' id='5'/>
                <DialogItem name='Mike' id='6'/>
                
            </div>

            <div className={rename.messages}>
                <Message message='Hi'/>
                <Message message='How are you'/>
                <Message message='WAZZZAAARRR'/>
                
            </div>
        </div>
    )
}

export default Dialogs