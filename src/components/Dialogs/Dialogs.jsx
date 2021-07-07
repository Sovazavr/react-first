import rename from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={rename.dialogs}>

            <div className={rename.dialogs_item}>
                <div className={rename.dialog}>Dmitry</div>
                <div className={rename.dialog}>Andrey</div>
                <div className={rename.dialog}>Sveta</div>
            </div>

            <div className={rename.messages}>
                <div className={rename.message}>Hi</div>
                <div className={rename.message}>How are you</div>
                <div className={rename.message}>WAZZZAAARRR</div>
            </div>
        </div>
    )
}

export default Dialogs