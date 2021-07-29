import Button from '@material-ui/core/Button';
import {Field, reduxForm } from 'redux-form';


const LoginForm = (props) => {
    return (
    
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'login'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
                </div>
                <div>
                    <Button>log in</Button>
                </div>
            </form>
       
    )
}

const LoginReduxForm= reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit=(formData)=> {
        console.log(formData)
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}

export default Login