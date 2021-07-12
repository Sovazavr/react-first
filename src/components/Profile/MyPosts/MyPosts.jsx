import rename from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} />)

  let newPostElement = React.createRef()

  let addPost = () => { 
    let text=newPostElement.current.value
    alert(text)
   }
  return (
    <div className={rename.postsBlock}>
      <h1>My posts</h1>
      <div  >
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={rename.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts