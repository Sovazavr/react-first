import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import rename from './Dialogs.module.css'
import React from 'react'
import Button from '@material-ui/core/Button'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messages-reducer'
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom'
import { Textarea } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../Utils/Validators/validators'
import Divider from '@material-ui/core/Divider';

const Dialogs = (props) => {
    let state = props.messagesPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = state.messages.map(message => <Message message={message.message} />)


    


    
    let addNewMessage = (values) => {
        
        props.sendMessage(values.newMessageBody)
    }
    if (!props.isAuth) {
        return <Redirect to='/login' />
    }

    return (
        <div className={rename.dialogs}>

            <div className={rename.dialogs_item}>
                {dialogsElements}

            </div>
            <Divider orientation="vertical" flexItem />
            <div className={rename.messages}>
                <div>
                    <div>
                    
                       <AddMessageFormRedux onSubmit={addNewMessage}/>
                    
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
const maxLength100=maxLengthCreator(100)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component={Textarea} 
                 multiline rows={2}
                 label="Enter you message" variant="outlined"
                name='newMessageBody' className={rename.textfield}
                validate={[required, maxLength100]}/>
            </div>
            <div>
                <button >Run</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux=reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs