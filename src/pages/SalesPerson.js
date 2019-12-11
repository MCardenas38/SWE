import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import PropTypes from 'prop-types'
import {
Card, Row, Col, CardTitle, CardText, CardDeck,
CardSubtitle, CardBody, Progress, CardHeader,
Button, Table, Container
} from 'reactstrap';
import { CardColumns } from 'react-bootstrap';
import { breakStatement } from '@babel/types';
import "../Manager.css";
import Sm_container from "../components/sm_container_div";
import Lg_container from "../components/lg_container_div";
import Axios from "axios";

class SalesPerson extends Component{

  constructor(props) {
    super(props);
    this.state = {
        u_name: this.props.location.state.u_name,
        u_role: this.props.location.state.u_role,
        user_id: this.props.location.state.user_id,
        restaurant_name:"",
        supply_list: [],
        add_supply:"",
        add_price:""
    };
  }

  componentDidMount(){
    console.log(this.state);
    Axios.get("/api/restaurant_name_sales",{
        params:{
            salesperson_id: this.state.user_id
        }
    }).then(
        res1 => {
            console.log(res1.data);
            Axios.get("/api/supply",{
                params:{
                    restaurant_name: res1.data.restaurant_name,
                }
            }).then(
                res2 => {
                    this.setState({
                        supply_list: res2.data,
                        restaurant_name: res1.data.restaurant_name
                    });
                    console.log(res2.data);
                    console.log(this.state);
                }
            )
        }
    )
}

handleChange_supply= (e)=>{
  this.setState({
    add_supply: e.target.value
  });
}

handleChange_supply_price= (e)=>{
  this.setState({
    add_price: e.target.value
  });
}

handleAdd = () => {
  Axios.post('/api/supply_add',{
      supply_name: this.state.add_supply,
      restaurant_name: this.state.restaurant_name,
      supply_price: this.state.add_price
  }).then(
    (response) => {
      Axios.get("/api/supply",{
        params:{
            restaurant_name: this.state.restaurant_name,
        }
    }).then(res=>{
      this.setState({
        supply_list: res.data
      });
      console.log(this.state.supply_list)
    });
 })
}

render(){
  return(
      <>
      <Col xl="4">
              {/* MENU TABLE */}
          <Card className="shadow">
          <CardHeader className="border-0">
              <Row className="align-items-center">
              <div className="col">
          <h3 className="mb-0">{this.state.restaurant_name} Supply</h3>
              </div>
              <div className="col text-right">
              </div>
              </Row>
          </CardHeader>
          <Table className="align-items-center table-flush" responsive>
              <tbody>
                  {/* set if statment if they already have aproval set */}
                  {this.state.supply_list? (this.state.supply_list.map((item,index) =>{
                           return(
                              <tr>
                                  <th scope="row">{item.supply_name} : ${item.supply_price}</th>
                              </tr>
                          );
                      })): <></>
                  }
                <div className="box">
                  <h1>Add Item to Supplies</h1>
                  {/* <p>{this.state.username}</p> */}
                  <input onChange={this.handleChange_supply} placeholder="Supply Item" />
                
                  <input onChange={this.handleChange_supply_price} placeholder="Price" />

                  <Button outline color="success" onClick={this.handleAdd}>Add</Button>
                
                  {/* <a href="#"><div className="btn" onClick={this.handleSubmit}>Sign In</div></a>  */}
                </div>
              </tbody>
          </Table>
          </Card>
      </Col>
      </>
  );
}

}

export default SalesPerson;