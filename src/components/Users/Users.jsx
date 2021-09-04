import styles from './Users.module.css'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';


let Users = (props) => {
    
   
    
    return (
        <div >
           <Paginator className={styles.paginator} totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} 
            currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            {

                props.users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress} 
                    unfollow={props.unfollow} follow={props.follow} />)
            }
            
        </div>
    )
}

export default Users