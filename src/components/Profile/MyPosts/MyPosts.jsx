import rename from './MyPosts.module.css'
import Post from './Post/Post'
import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../Utils/Validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

const MyPosts = React.memo(props => {


  let postsElements = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} />)



  let onAddPost = (values) => {//это колбэк
    props.addPost(values.newPostText)
  }

  return (
    <div className={rename.postsBlock}>
      <h1>My posts</h1>
      <div  >
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <Paper elevation={5}>
        <div className={rename.posts}>
          {postsElements.reverse()}
        </div>
      </Paper>
    </div>
  )

})
const maxLength300 = maxLengthCreator(300)
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      
        <div className={rename.text}>
          <Field component={Textarea}
            multiline rows={3}
            label="Enter you post text" variant="outlined"
            name="newPostText"
            className={rename.textInput}
            
            validate={[required, maxLength300]} />
             <button className={rename.add}>Add post</button> 
           
        </div>
        
      
    </form>
  )
}


const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)
export default MyPosts