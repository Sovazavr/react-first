import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import userPhoto from '../../../Assets/images/default_ava.jpg'
import { NavLink } from 'react-router-dom';
import styles from '../Users.module.css'

let User = ({ user, followingInProgress, unfollow, follow }) => {

    return (
        <div key={user.id}>
            <div className={styles.Line}>
                <div >
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={styles.usersPhoto} />
                    </NavLink>

                    {user.followed ? <Button disabled={followingInProgress.some(id => id === user.id)}
                        className={styles.button} onClick={
                            () => {
                                unfollow(user.id)
                            }
                        }>UNFOLLOW</Button>
                        : <Button disabled={followingInProgress.some(id => id === user.id)}
                            className={styles.button} onClick={
                                () => {
                                    follow(user.id)
                                }
                            }>FOLLOW</Button>
                    }

                </div>


                <Paper elevation={5} className={styles.paper}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>

                    {/* <div>{user.location.country}</div>
                        <div>{user.location.city}</div> */}
                </Paper>
            </div>
        </div>

    )
}

export default User