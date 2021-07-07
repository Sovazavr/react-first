import MyPosts from './MyPosts/MyPosts.jsx';
import rename from './Profile.module.css'


const Profile = () => {
  return (
    <div>

      <img className={rename.backImg} src='https://www.peku-poccuu.ru/images/city/156.jpg' />
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;