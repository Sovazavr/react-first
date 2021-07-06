import MyPosts from './MyPosts/MyPosts.jsx';
import rename from './Profile.module.css'


const Profile = () =>
{
    return (
      <div>

      <img className={rename.backImg} src='https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-Desktop.jpg'/>
      <div>
      ava + description
    </div>
    <MyPosts/>
    </div>
    )
}

export default Profile;