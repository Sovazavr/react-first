import rename from './Profile.module.css'

const Profile = () =>
{
    return (
      <div className={rename.Content}>

      <img className={rename.backImg} src='https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-Desktop.jpg'/>
      <div>
      ava + description
    </div>
    <div className='item'>
      My posts
      <div>
        new post
      </div>
      <div>
        post 1
      </div>
      <div>
        post 2
      </div>
      </div>
    </div>
    )
}

export default Profile;