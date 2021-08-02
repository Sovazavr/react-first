import TextField from '@material-ui/core/TextField';
import styles from './FormsControls.module.css'
export const Textarea=({input, meta, ...props})=> {
    return (
        <div >
            <TextField {...input} {...props}/>
        </div>
    )
}