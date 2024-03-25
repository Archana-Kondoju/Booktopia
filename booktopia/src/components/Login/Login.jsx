import React from 'react';
import Joi from 'joi-browser';
import {Link} from 'react-router-dom';
import Form from '../../navigation/form';
//import Input from './input';
class Login extends Form {
    // username = React.createRef();
    state = {
        data: { username: "", password: ""},
        errors:{}
    };
    schema={
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    };   
    
    doSubmit =() =>{
        console.log("submitted");
    };
    
    render() { 
        
        return (<div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("username","Username")}
                {this.renderInput("password","Password","password")}
                {this.renderButton("LogIn")}
                <p>don't you have an account?<Link to='/register'>Register</Link></p>
            </form>
        </div>);
    };
};
 
export default Login;
// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import Form from './../../navigation/form';
// class Login extends Component {
//     // state = {  } 
//     render() { 
//         return (
//             <div>
//                 <h1>Login Page</h1>
//                 <form onSubmit={this.handle
//                 }>
//                     <label htmlFor="username">Username</label>
//                     <input type="text" name="username" id="username" />
//                     <br/>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" name="password" id="password" />
//                     <br/><br/>
//                     <button type="submit" className='btn btn-primary'>LogIn</button>
//                 </form>
//             </div>
//         );
//     }
// }
 
// export default Login;