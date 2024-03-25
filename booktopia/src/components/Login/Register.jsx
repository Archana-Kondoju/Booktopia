import React from 'react';
import Form from './../../navigation/form';
import Joi from 'joi-browser';
import {Link} from 'react-router-dom';
class RegisterForm extends Form {
    state = { 
        data:{username:'', password:'', name:''},
        errors:{}
    }; 
    schema={
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().label("Name")
    };   
    
    doSubmit =() =>{
        console.log("submitted");
    };
    
    render() { 
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username","Username")}
                    {this.renderInput("password",'Password',"password")}
                    {this.renderInput("name","Name")}
                    {this.renderButton("Register")}
                    <p>Already have an account? <Link to='/logIn'>Login</Link></p>
                </form>
            </div>
        );
    }
}
 
export default RegisterForm;
// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// // import {User} from '../bookApi/user';
// class Register extends Component {
//     // state = {
//     //     username: '',
//     //     password: ''
//     // }
//     // handleUsername = (e) => {
//     //     this.setState({username: e.target.value});
//     // }
//     // handlePassword = (e) => {
//     //     this.setState({password: e.target.value});
//     // }
//     // handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     const {username, password} = this.state;
//     //     User({username, password});
//     //     this.setState({username: '', password: ''});
//     // }
//     render() {
//         // const { username, password } = this.state
//         return (
//             <div>
//                 <h1>Register</h1>
//                 {/* onSubmit={this.handleSubmit} */}
//                 <form >
//                     <label htmlFor="username">Username</label>
//                     {/* onChange={this.handleUsernameChange} value={username} value={password} onChange={this.handlePasswordChange}   */}
//                     <input type="text" name="username"  />
//                     <br/>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" name="password" />
//                     <br/><br/>
//                     <button type="submit" className='btn btn-primary'>Register</button>
//                 </form>
//                 <p>Already have an account? <Link to='/logIn'>Login</Link></p>
//             </div>
//         )
//     }
//     // handleUsernameChange = ({ target: { value } }) => this.setState({ username: value })
//     // handlePasswordChange = ({ target: { value } }) => this.setState({ password: value })
// }
 
// export default Register;