import rename from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <img className={rename.backImg} src='https://www.peku-poccuu.ru/images/city/156.jpg' />
            <div className={rename.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo