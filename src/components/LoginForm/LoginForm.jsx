import React from "react";
import { Field, reduxForm } from "redux-form"


const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder="name" component={"input"} name={"login"}/>
            </div>
            <div>   
                <Field type="text" placeholder="password" component={"input"}  name={"password"} />
            </div>
            <div>
                <Field type="checkbox" component={"input"}  name={"remember me"}/> remember me
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