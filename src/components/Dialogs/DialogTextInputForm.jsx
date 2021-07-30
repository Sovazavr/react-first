import TextField from '@material-ui/core/TextField';
import rename from './Dialogs.module.css'
import {Field, reduxForm } from 'redux-form';

const DialogTextInputForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>

            <TextField name='newMessageInput' className={rename.textfield} id="outlined-basic" label='Enter you message' 
            variant="outlined" value={props.newMessageBody}
                onChange={props.onNewMessageChange} />

        </form>

    )
}
const DialogReduxForm= reduxForm({
    form: 'message'
})(DialogTextInputForm)


const DialogInput = (props) => {
    const onSubmit=(formData)=> {
        console.log(formData)
    }
    return (
        <DialogReduxForm newMessageBody={props.newMessageBody}
        onNewMessageChange={props.onNewMessageChange} onSubmit={onSubmit}/>
    )
}

export default DialogInput