import rename from './../Dialogs.module.css'

const Message = (props) => {
    return (
        
            <div className={rename.message}>{props.message}</div>
            
        
    )
}

export default Message