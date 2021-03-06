import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, requestUsers} from '../../redux/users-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import Preloader from '../common/preloader/preloader.js'
import { compose } from 'redux'
import {getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selector'
class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)

    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
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


/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state)
    }
}




export default compose(
    
    connect(mapStateToProps,{follow,unfollow,setCurrentPage, toggleIsFollowingProgress, requestUsers})
)(UsersContainer)