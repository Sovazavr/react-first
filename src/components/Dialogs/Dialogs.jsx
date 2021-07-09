import { NavLink } from 'react-router-dom'
import rename from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
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
    let dialogs = [
        { id: '1', name: 'Dmitry' },
        { id: '2', name: 'Andrew' },
        { id: '3', name: 'Sveta' },
        { id: '4', name: 'Vadim' },
        { id: '5', name: 'Alexander' },
        { id: '6', name: 'Mike' }
    ]

    let messages = [
        { id: '1', message: 'Hi' },
        { id: '2', message: 'How are you' },
        { id: '3', message: 'WAZZZAAARRR' }
    ]
    let dialogsElements = dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = messages.map(message => <Message message={message.message} />)

    return (
        <div className={rename.dialogs}>

            <div className={rename.dialogs_item}>
                {dialogsElements}
            </div>

            <div className={rename.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs