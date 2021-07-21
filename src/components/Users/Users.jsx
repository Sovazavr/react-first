import React from 'react'
import styles from './Users.module.css'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import * as axios from 'axios'
import userPhoto from '../../Assets/images/default_ava.jpg'







class Users extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            return <span className={this.props.currentPage===p && styles.page}
                                onClick={() => { this.onPageChanged(p); }}>{p}</span>
                        })
                    }
                </div>
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