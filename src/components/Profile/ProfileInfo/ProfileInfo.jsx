import rename from './ProfileInfo.module.css'
import Card from '@material-ui/core/Card';
import Preloader from '../../common/preloader/preloader.js'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/* <Card>
                
                 <img className={rename.backImg} src='https://www.peku-poccuu.ru/images/city/156.jpg' /> 
            </Card> */}
            <div className={rename.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                {props.profile.contacts.facebook}
                {props.profile.contacts.vk}
                {props.profile.contacts.twitter}
               
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo