import styles from './Users.module.css'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import userPhoto from '../../Assets/images/default_ava.jpg'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';


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

                props.users.map(u => <div key={u.id}>
                    <div className={styles.Line}>
                        <div >
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto} />
                            </NavLink>

                            {u.followed ? <Button disabled={props.followingInProgress.some(id => id === u.id)} className={styles.button} onClick={
                                () => {
                                    props.unfollow(u.id)
                                }
                            }>UNFOLLOW</Button>
                                : <Button disabled={props.followingInProgress.some(id => id === u.id)} className={styles.button} onClick={
                                    () => {
                                        props.follow(u.id)
                                    }
                                }>FOLLOW</Button>
                            }

                        </div>


                        <Paper elevation={5} className={styles.paper}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>

                            {/* <div>{u.location.country}</div>
                        <div>{u.location.city}</div> */}
                        </Paper>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users