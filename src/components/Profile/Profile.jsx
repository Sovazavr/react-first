import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';

import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {
  
 
  return (
    <div>

      <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} 
            updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;