import React from "react";
import { Field, reduxForm } from "redux-form"

import { Input } from "../common/FormControls/FormControls";
import { required } from '../../utils/validators/validators';
const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} type="text" placeholder="name" component={Input} name={"login"}/>
            </div>
            <div>   
                <Field validate={[required]} type="text" placeholder="password" component={Input}  name={"password"} />
            </div>
            <div>
                <Field  type="checkbox" component={Input}  name={"remember me"}/> remember me
            </div>
            <div>
                <button type="submit">login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () =>{
    const onSubmit = (formData) =>{
        console.log(formData);
    }
    return(
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}></LoginReduxForm>
        </div>
    )
}
export default Login