import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import rename from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {
  
  return (
    <div>

      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
    </div>
  )
}

export default Profile;