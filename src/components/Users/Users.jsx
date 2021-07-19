import React from 'react'
import styles from './Users.module.css'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

let Users = (props) => {

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={styles.Line}>
                        <div >
                            <img src={u.photoUrl} className={styles.usersPhoto} />
                        {/* </div>
                        <div> */}
                            {u.followed ? <Button className={styles.button} onClick={() => { props.unfollow(u.id) }}>UNFOLLOW</Button>
                                : <Button className={styles.button} onClick={() => { props.follow(u.id) }}>FOLLOW</Button>}

                        </div>


                        <Paper elevation={5} className={styles.paper}>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>

                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </Paper>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users