import React, { Component } from "react";
import { Row, Col, Form, FormControl, FormGroup, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Link,
  useRouteMatch
} from "react-router-dom";
import "../index.css";
import axios from "axios";

class Login extends Component {
  state = {
    redirect: false,
    username: "",
    u_name: "",
    password: "",
    u_role: "",
    user_id: null,
  }


  handleclick = () => {
    axios.get('/api/login', {
      params: {
        username: this.state.username,
        u_password: this.state.password
      }
    }).then(
      (response) => {
        console.log(response);
        if (response.data) {
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
        state: {
          u_name: this.state.u_name,
          u_role: this.state.u_role,
          user_id: this.state.user_id
        }
      }} />
    }
    else if (this.state.redirect && this.state.u_role === 'customer') {
      return <Redirect to={{
        pathname: '/customer',
        state: {
          u_name: this.state.u_name,
          u_role: this.state.u_role,
          user_id: this.state.user_id
        }
      }} />
    }
    else if (this.state.redirect && this.state.u_role === 'delivery') {
      return <Redirect to={{
        pathname: '/delivery',
        state: {
          u_name: this.state.u_name,
          u_role: this.state.u_role,
          user_id: this.state.user_id
        }
      }} />
    }
    else if (this.state.redirect && this.state.u_role === 'cook') {
      return <Redirect to={{
        pathname: '/cook',
        state: {
          u_name: this.state.u_name,
          u_role: this.state.u_role,
          user_id: this.state.user_id
        }
      }} />
    }
    else if (this.state.redirect && this.state.u_role === 'salesperson') {
      return <Redirect to={{
        pathname: '/salesperson',
        state: {
          u_name: this.state.u_name,
          u_role: this.state.u_role,
          user_id: this.state.user_id
        }
      }} />
    }
    else {
      console.log(this.state);
    }
  }

  handleChange_username = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  handleChange_password = (e) => {
    this.setState({
      password: e.target.value
    });
  }


  render() {
    return (
      <>
        {this.renderRedirect()}
        <Row>
          <Col>
            <img src="https://eilonpaz.com/wp-content/uploads/2016/01/Eilon_Paz_0018-853x1280.jpg" height="70%" width="90%"/>
          </Col>
          <Col className="form">
            <FormGroup>
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Username</label>
            <input type="email" className="form-control" placeholder="Enter username" onChange={this.handleChange_username} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={this.handleChange_password} />
          </div>

          <button type="submit" className="btn btn-primary btn-block" onClick={this.handleclick}>Submit</button>
          </FormGroup>
          <p className="forgot-password text-right"><Link to='/register'>Need to register? Click here.</Link></p>
        </Col>
        </Row>
      </>
    )
  }

}


export default Login;
