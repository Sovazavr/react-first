import rename from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={rename.postsBlock}>
      <h1>My posts</h1>
      <div  >
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={rename.posts}>
        <Post message='Hi, how a you' />
        <Post message='Hello world' />
      </div>
    </div>
  )
}

export default MyPosts