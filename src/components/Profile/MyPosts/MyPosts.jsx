import rename from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  let postsData= [
    {id:1, post:'Hi, how a you', likesCount:20},
    {id:2, post:'It\'s my first post', likesCount:12}
  ]
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
        <Post message={postsData[0].post} likesCount={postsData[0].likesCount}/>
        <Post message={postsData[1].post} likesCount={postsData[1].likesCount} />
      </div>
    </div>
  )
}

export default MyPosts