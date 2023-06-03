import React from "react";
import { Field, reduxForm } from "redux-form"

import { Input } from "../common/FormControls/FormControls";
import { required } from '../../utils/validators/validators';
import { connect } from "react-redux";

import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} type="text" placeholder="email" component={Input} name={"email"}/>
            </div>
            <div>   
                <Field validate={[required]} type="password" placeholder="password" component={Input}  name={"password"} />
            </div>
            <div>
                <Field  type="checkbox" component={Input}  name={"rememberMe"}/> remember me
            </div>
            <div>
                <button type="submit">login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) =>{
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth){
        return <Navigate to={'/Content'}/>
    }
    return(
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}></LoginReduxForm>
        </div>
    )
}
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login) 