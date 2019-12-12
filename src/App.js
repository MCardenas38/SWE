import React from "react";
import { BrowserRouter as Router, Route, Switch, HashRouter, NavLink } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Customer from "./pages/Customer";
import Manager from "./pages/Manager";
import Restaurant from "./pages/Restaurant";
import Delivery from "./pages/Delivery";
import Cook from "./pages/Cook";
import SalesPerson from "./pages/SalesPerson";
import {Nav, Navbar, Row, Col, Button} from 'react-bootstrap';
import Register from "./pages/Register";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

function App() {
  return (
    <Router>
      <div>

          <Navbar bg="dark" variant="primary">
          <Navbar.Brand><img src="https://pbs.twimg.com/media/ELhJNXsX0AA7CUP?format=png&name=small" height="37px" width="90px" alt="img"/></Navbar.Brand>
          <Nav>
            <Row className="header">
              <Col className="signout"><Button class="btn btn-primary" style={{ textDecoration: 'none'}}><NavLink className="link" exact to="/">Logout</NavLink></Button></Col>
              {/* <Col className="list"><NavLink className="link" exact to="/">Login</NavLink></Col>
              <Col className="list"><NavLink className="link" exact to="/customer">Customer</NavLink></Col>
              <Col className="list"><NavLink className="link" to="/manager">Manager</NavLink></Col>
              <Col className="list"><NavLink className="link" to="customer/matty">Restaurant Page</NavLink></Col>
              <Col className="list"><NavLink className="link" to="/register">Regisster</NavLink></Col> */}

            </Row>
          </Nav>
          </Navbar>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/customer" component={Customer} />
          <Route exact path="/manager" component={Manager} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/customer/:restuarant" component={Restaurant} />
          <Route exact path="/Cook" component={Cook} />
          <Route exact path="/salesperson" component={SalesPerson} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  //   <HashRouter>
  //   <div className="App">
        
  //         <div className="content">
  //           <Route exact path="/" component={Login}/>
  //           <Route path="/customer" component={Customer}/>
  //           <Route path="/manager" component={Manager}/>
  //         </div>
  //   </div>
  // </HashRouter>
  );
}

export default App;
