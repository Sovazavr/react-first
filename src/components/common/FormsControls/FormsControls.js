import TextField from '@material-ui/core/TextField';
import styles from './FormsControls.module.css'


export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            {hasError ?
                <div >
                    <TextField error {...input} {...props} />
                    <span FontColor="red">{meta.error}</span>
                </div> :
                <div >
                    <TextField {...input} {...props} />

                </div>
            }
        </div>
    )
}

export const InputMy = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <>

            
                <div className={styles.formcontrol+" "+(hasError ? styles.error :"")}>
                    <input  {...input} {...props} />
                    {hasError && <span >{meta.error}</span>}
                </div> 
                
            
        </>
    )
}
