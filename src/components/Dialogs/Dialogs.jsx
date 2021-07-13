import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import rename from './Dialogs.module.css'
import React from 'react'
import Button from '@material-ui/core/Button'



const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = props.messages.map(message => <Message message={message.message} />)

    let newMessage= React.createRef()

    let Run = () => {
        let text=newMessage.current.value
    alert(text)
    }

    return (
        <div className={rename.dialogs}>

            <div className={rename.dialogs_item}>
                {dialogsElements}

            </div>

            <div className={rename.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessage}></textarea>
                    <Button variant="contained" color="primary" onClick={Run}>Run</Button>
                </div>

            </div>

        </div>
    )
}

export default Dialogs