import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers } from '../../redux/users-reducer'
import * as axios from 'axios'
import Preloader from '../common/preloader/preloader.js'
import { userAPI } from '../../api/api'
class UsersAPI extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps,
    { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers }
)(UsersAPI)