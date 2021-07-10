import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import rename from './Dialogs.module.css'





const Dialogs = (props) => {
    
    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.messages.map(message => <Message message={message.message} />)

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