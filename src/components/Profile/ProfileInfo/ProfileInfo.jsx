import rename from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader.js'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import UserPhoto from '../../../Assets/images/default_ava.png'
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import Fab from '@material-ui/core/Fab';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>

            <div className={rename.descriptionBlock}>
                <img src={props.profile.photos.large || UserPhoto} />
                {props.isOwner &&


                    // <input type={'file'} onChange={onMainPhotoSelected} />
                    <label>
                        <input
                            style={{ display: 'none' }}
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                            onChange={onMainPhotoSelected}
                        />
                        <Fab
                            color='inherit'
                            size="small"
                            component="span"
                            aria-label="add"
                            variant="extended"

                        >
                            <BrokenImageIcon/>
                        </Fab>
                    </label>
                }
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
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