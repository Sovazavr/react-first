import React from 'react'
import styles from './Users.module.css'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import * as axios from 'axios'
import userPhoto from '../../Assets/images/default_ava.jpg'

class Users extends React.Component {
    
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return (
            <div>

                {
                    this.props.users.map(u => <div key={u.id}>
                        <div className={styles.Line}>
                            <div >
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto} />
                                {/* </div>
                            <div> */}
                                {u.followed ? <Button className={styles.button} onClick={() => { this.props.unfollow(u.id) }}>UNFOLLOW</Button>
                                    : <Button className={styles.button} onClick={() => { this.props.follow(u.id) }}>FOLLOW</Button>}

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
}

export default Users