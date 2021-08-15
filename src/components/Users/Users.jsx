import styles from './Users.module.css'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import userPhoto from '../../Assets/images/default_ava.jpg'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';


let Users = (props) => {
    
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    // }
    
    return (
        <div>
           <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} 
            currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            {

                props.users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress} 
                    unfollow={props.unfollow} follow={props.follow} />)
            }
        </div>
    )
}

export default Users