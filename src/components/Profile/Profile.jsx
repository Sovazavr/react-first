import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';

import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {
  
 
  return (
    <div>

      <ProfileInfo profile={props.profile} status={props.status} 
            updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;