import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    refrasheProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
    componentDidMount() {
        this.refrasheProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refrasheProfile()
        }
    }
    render() {

        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status}
                updateUserStatus={this.props.updateUserStatus} savePhoto={this.props.savePhoto}/>//передаем все просы раскрытыми
        )
    }
}




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    photo: state.profilePage.photo
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

