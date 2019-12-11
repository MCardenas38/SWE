import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Link,
  useRouteMatch
} from "react-router-dom";
import "../Login.css"
import axios from "axios";

class Login extends Component{
    state = {
        redirect: false,
        username: "",
        u_name: "",
        password: "",
        u_role: "",
        user_id: null,
      }


      handleclick = () => {
        axios.get('/api/login',{
          params: {
            username: this.state.username,
            u_password: this.state.password
          }
        }).then(
          (response) => {
            console.log(response);
            if(response.data){
              this.setState({
                redirect: true,
                u_name: response.data.u_name,
                u_role: response.data.u_role,
                user_id: response.data.user_id
              });
              console.log(this.state);
            }
      		},
      		(error) => {
      			console.log(error);
      		}
        )
      }

      renderRedirect = () => {
        if (this.state.redirect && this.state.u_role === 'manager') {
          return <Redirect to={{
              pathname: '/manager',
              state:{
                u_name: this.state.u_name,
                u_role: this.state.u_role,
                user_id: this.state.user_id
              }
          }} />
        }
        else if (this.state.redirect && this.state.u_role === 'customer') {
          return <Redirect to={{
              pathname: '/customer',
              state:{
                u_name: this.state.u_name,
                u_role: this.state.u_role,
                user_id: this.state.user_id
              }
          }} />
        }
        else if (this.state.redirect && this.state.u_role === 'delivery') {
          return <Redirect to={{
              pathname: '/delivery',
              state:{
                u_name: this.state.u_name,
                u_role: this.state.u_role,
                user_id: this.state.user_id
              }
          }} />
        }
        else if (this.state.redirect && this.state.u_role === 'cook') {
          return <Redirect to={{
              pathname: '/cook',
              state:{
                u_name: this.state.u_name,
                u_role: this.state.u_role,
                user_id: this.state.user_id
              }
          }} />
        }
        else if (this.state.redirect && this.state.u_role === 'salesperson') {
          return <Redirect to={{
              pathname: '/salesperson',
              state:{
                u_name: this.state.u_name,
                u_role: this.state.u_role,
                user_id: this.state.user_id
              }
          }} />
        }
        else{
          console.log(this.state);
        }
      }

      handleChange_username= (e)=>{
        this.setState({
          username: e.target.value
        });
      }

      handleChange_password= (e)=>{
        this.setState({
          password: e.target.value
        });
      }


      render () {
        return (
           <>
             {this.renderRedirect()}
             <div className="centered">
                <div className="box">
                <h1>Login</h1>
                {/* <p>{this.state.username}</p> */}
                <input  onChange={this.handleChange_username}   />
                
                <input type="password" onChange={this.handleChange_password} />

                <button onClick={this.handleclick}>Sign In</button>
                
                {/* <a href="#"><div className="btn" onClick={this.handleSubmit}>Sign In</div></a>  */}

                <a href="#"><div id="btn2">Sign Up</div></a> 
                
                </div>
              </div>
           </>
        )
      }

}

export default Login;