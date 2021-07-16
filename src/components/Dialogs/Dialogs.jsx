import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import rename from './Dialogs.module.css'
import React from 'react'
import Button from '@material-ui/core/Button'
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/messages-reducer'


const Dialogs = (props) => {
    let state=props.store.getState().messagesPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = state.messages.map(message => <Message message={message.message} />)

    
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
       let body=e.target.value
       props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={rename.dialogs}>

            <div className={rename.dialogs_item}>
                {dialogsElements}

            </div>

            <div className={rename.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter you message'></textarea></div>
                    <div><Button variant="contained" color="primary" onClick={onSendMessageClick}>Run</Button></div>
                </div>

            </div>

        </div>
    )
}

export default Dialogs