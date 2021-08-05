import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../Utils/Validators/validators';
import { InputMy } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';

const LoginForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'}
                    validate={[required]}
                    component={InputMy} />
            </div>
            <div>
                <Field type={'password'} placeholder={'password'} name={'password'}
                    validate={[required]}
                    component={InputMy} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={InputMy} /> remember me
            </div>
            <div>
                <button>log in</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
   
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {

        return <Redirect to={"/profile"} />
    }
    return (
        <LoginReduxForm onSubmit={onSubmit} />
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)