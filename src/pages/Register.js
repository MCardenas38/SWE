import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import "../index.css";
import axios from "axios";

class Register extends Component {
    state = {
        redirect: false,
        username: "",
        u_name: "",
        password: "",
        u_role: ""
    }
    // setRedirect = () => {
    //     this.setState({
    //       redirect: true
    //     })
    //   }

    handleclick = () => {
        axios.post('/api/register', {
            params: {
                u_name: this.state.u_name,
                username: this.state.username,
                password: this.state.password
            }
        }).then(
            (response) => {
                    this.setState({
                        redirect: true,
                        username: this.state.username,
                        u_name: this.state.u_name,
                        password: this.state.password,
                        u_role: 'customer'
                    })
                    console.log(this.state);
                },
            (error) => {
                console.log(error);
    
            }
        )
    }
      
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/login'
            }} />
        }
    }

    handleChange_username = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    handleChange_u_name= (e) => {
        this.setState({
          u_name: e.target.value
        });
      }

    handleChange_password = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleChange_u_name = (e) => {
        this.setState({
            u_name: e.target.value
        });
    }


    render() {
        return (
            <>
        {this.renderRedirect()}
        <Row>
          <Col className="form">
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Full Name</label>
            <input type="name" className="form-control" placeholder="Enter Full Name" onChange={this.handleChange_u_name} />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleChange_username} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={this.handleChange_password} />
          </div>

          <button type="submit" className="btn btn-primary btn-block" onClick={this.handleclick}>Submit</button>

          <p className="forgot-password text-right"><Link to='/'>Already registered? Click here.</Link></p>
        </Col>
        <Col>
            <img src="https://images.squarespace-cdn.com/content/v1/50612c3de4b0095aa0d4b4a9/1535507371980-TTV89SKWVJ07Z9HETJ6V/ke17ZwdGBToddI8pDm48kCPuvrwiDAzmJjaUD2KYDuF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0lCYWGxfdB_uf1_ERfebHZ7aN1jAATh_jt2GqUrmhRLXFnCc_YuBOmiOSsTJXMv8Mg/recipe_4.jpg?format=1500w" alt="fuck" height="100%" width="110%"/>
          </Col>
        </Row>
            </>
        )
    }
}

export default Register;