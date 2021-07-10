import MyPosts from './MyPosts/MyPosts.jsx';
import rename from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {
  
  return (
    <div>

      <ProfileInfo />
      <MyPosts posts={props.posts}/>
    </div>
  )
}

export default Profile;