import rename from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
 
  let postsElements= props.posts.map( p =><Post message={p.post} likesCount={p.likesCount}/>)
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
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts