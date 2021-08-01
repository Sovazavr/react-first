import rename from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import Button from '@material-ui/core/Button'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} />)

 

  let onAddPost = (values) => {//это колбэк
    props.addPost(values.newPostText)
  }
  
  return (
    <div className={rename.postsBlock}>
      <h1>My posts</h1>
      <div  >
        <AddNewPostFormRedux onSubmit={onAddPost}/>
      </div>
      <Paper elevation={5}>
        <div className={rename.posts}>
          {postsElements.reverse()}
        </div>
      </Paper>
    </div>
  )
}

const AddNewPostForm=(props)=> {
  return(
    <form onSubmit={props.handleSubmit}>
          <div>
            <Field component="textarea" name="newPostText"
              className={rename.text} />
          </div>
          <div>
            <button className={rename.add}>Add post</button>
          </div>
        </form>
  )
}


const AddNewPostFormRedux=reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)
export default MyPosts