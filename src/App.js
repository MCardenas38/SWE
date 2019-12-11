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
import {Nav, Navbar, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
        
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">BinaryBites</Navbar.Brand>
          <Nav>
            <Row className="header">
              <Col className="list"><NavLink className="link" exact to="/">Login</NavLink></Col>
              <Col className="list"><NavLink className="link" exact to="/customer">Customer</NavLink></Col>
              <Col className="list"><NavLink className="link" to="/manager">Manager</NavLink></Col>
              <Col className="list"><NavLink className="link" to="customer/matty">Restaurant Page</NavLink></Col>
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
