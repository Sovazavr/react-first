import Button from '@material-ui/core/Button';
import {Field, reduxForm } from 'redux-form';
import { required } from '../../Utils/Validators/validators';
import { InputMy } from '../common/FormsControls/FormsControls';


const LoginForm = (props) => {
    return (
    
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'login'} name={'login'} 
                    validate={[required]}
                    component={InputMy}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} 
                    validate={[required]}
                    component={InputMy}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={InputMy}/> remember me
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