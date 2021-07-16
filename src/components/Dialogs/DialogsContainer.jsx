import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/messages-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    let state=props.store.getState().messagesPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
       
       props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
        messagesPage={state}/>
    )
}

export default DialogsContainer