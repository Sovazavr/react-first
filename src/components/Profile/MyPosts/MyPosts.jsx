import rename from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import Button from '@material-ui/core/Button'


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} />)

  let newPostElement = React.createRef()

  let addPost = () => {
    props.addPost()
  }
  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }
  return (
    <div className={rename.postsBlock}>
      <h1>My posts</h1>
      <div  >
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} className={rename.text} />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={addPost} className={rename.add}>Add post</Button>
        </div>
      </div>
      <div className={rename.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts