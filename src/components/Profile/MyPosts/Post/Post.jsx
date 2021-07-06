import rename from './Post.module.css'

const Post =(props) =>{
    return (
    <div className={rename.item}>
        <img src='https://viberfaq.ru/wp-content/uploads/2020/09/Parnyam-3.jpg'/>
        {props.message}
        <div>
            <span>like</span>
        </div>
    </div>
    )
}

export default Post