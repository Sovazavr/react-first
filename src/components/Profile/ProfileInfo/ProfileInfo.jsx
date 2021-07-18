import rename from './ProfileInfo.module.css'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const ProfileInfo = () => {
    return (
        <div>
            <Card>
                
                 <img className={rename.backImg} src='https://www.peku-poccuu.ru/images/city/156.jpg' /> 
            </Card>
            <div className={rename.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo