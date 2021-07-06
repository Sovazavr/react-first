import rename from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
    <div>
      My posts
      <div  >
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message='Hi, how a you'/>
      <Post message='Hello world'/>
    </div>
    )
}

export default MyPosts