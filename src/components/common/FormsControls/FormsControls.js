import TextField from '@material-ui/core/TextField';
import styles from './FormsControls.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';


export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <>

            {hasError ?
                <div >
                    <TextField error {...input} {...props} />
                    <span FontColor="red">{meta.error}</span>
                </div> :
                <div >
                    <TextField  {...input} {...props} />

                </div>
            }
        </>
    )
}

export const InputMy = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <>

            {hasError ?
                <div >
                    <Input error {...input} {...props} />
                    <span FontColor="red">{meta.error}</span>
                </div> :
                <div >
                    <Input  {...input} {...props} />

                </div>
            }
        </>
    )
}
