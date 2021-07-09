import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import rename from './Dialogs.module.css'





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
    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
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