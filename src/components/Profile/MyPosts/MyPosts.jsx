import rename from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import Button from '@material-ui/core/Button'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import Paper from '@material-ui/core/Paper';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} />)

  let newPostElement = React.createRef()

  let onAddPost = () => {//это колбэк
    props.addPost()
  }
  let onPostChange = () => {//это колбэк
    let text = newPostElement.current.value
    props.updateNewPostText(text)

  }
  return (
    <div className={rename.postsBlock}>
      <h1>My posts</h1>
      <div  >
        <div>
          <textarea ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
            className={rename.text} />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={onAddPost} className={rename.add}>Add post</Button>
        </div>

      </div>
      <Paper elevation={5}>
        <div className={rename.posts}>
          {postsElements.reverse()}
        </div>
      </Paper>
    </div>
  )
}

export default MyPosts