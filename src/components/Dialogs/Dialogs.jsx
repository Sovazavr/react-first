import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import rename from './Dialogs.module.css'
import React from 'react'
import Button from '@material-ui/core/Button'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messages-reducer'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const Dialogs = (props) => {
    let state = props.messagesPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = state.messages.map(message => <Message message={message.message} />)


    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)

    }

    return (
        <div className={rename.dialogs}>

            <div className={rename.dialogs_item}>
                {dialogsElements}

            </div>

            <div className={rename.messages}>
                <div>
                    <div>
                        <TextField className={rename.textfield} id="outlined-basic" label='Enter you message' variant="outlined" value={newMessageBody}
                        onChange={onNewMessageChange}/>
                        </div>
                    <div>
                        <Button variant="contained" color="primary" onClick={onSendMessageClick}>Run</Button>
                    </div>
                </div>
                <div>
                    <Paper elevation={5}>
                        {messagesElements.reverse()}
                    </Paper>
                </div>


            </div>

        </div>
    )
}

export default Dialogs