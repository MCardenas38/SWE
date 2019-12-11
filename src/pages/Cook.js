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

class Cook extends Component{

  constructor(props) {
    super(props);
    this.state = {
        u_name: this.props.location.state.u_name,
        u_role: this.props.location.state.u_role,
        user_id: this.props.location.state.user_id,
        restaurant_name:"",
        food_list: [],
        add_food:"",
        add_price:""
    };
  }

  componentDidMount(){
    console.log(this.state);
    Axios.get("/api/restaurant_name_cook",{
        params:{
            cook_id: this.state.user_id
        }
    }).then(
        res1 => {
            console.log(res1.data);
            Axios.get("/api/menu",{
                params:{
                    restaurant_name: res1.data.restaurant_name,
                }
            }).then(
                res2 => {
                    this.setState({
                        food_list: res2.data,
                        restaurant_name: res1.data.restaurant_name
                    });
                    console.log(res2);
                    console.log(this.state);
                }
            )
        }
    )
}

handleDelete= id => {
  let food= this.state.food_list[id];
  Axios.delete("/api/remove_menu",{
    params:{
      food_id: food.food_id
    }
  }).then(res =>{
      console.log("Updated");
      Axios.get("/api/menu",{
        params:{
            restaurant_name: this.state.restaurant_name,
        }
        }).then(
            res2 => {
                this.setState({
                    food_list: res2.data
                });
                console.log(res2);
                console.log(this.state);
            }
        )
  });
};

handleChange_food= (e)=>{
  this.setState({
    add_food: e.target.value
  });
}

handleChange_price= (e)=>{
  this.setState({
    add_price: e.target.value
  });
}

handleclick = () => {
  Axios.post('/api/menu_add',{
      food_name: this.state.add_food,
      restaurant_name: this.state.restaurant_name,
      price: this.state.add_price
  }).then(
    (response) => {
      console.log(response);
      let temp= [];
      temp = this.state.food_list;
      let temp_obj= {
          food_name: this.state.add_food,
          restaurant_name: this.state.restaurant_name,
          price: this.state.add_price
      }
      temp.push(temp_obj);
      this.setState({
        food_list: temp
      });
    },
    (error) => {
      console.log(error);
    }
  )
}

render(){
  return(
      <>
      <Col xl="4">
              {/* MENU TABLE */}
          <Card >
          <CardHeader className="border-0">
              <Row className="align-items-center">
              <div className="col">
          <h3 className="mb-0">{this.state.restaurant_name} Menu</h3>
              </div>
              <div className="col text-right">
              </div>
              </Row>
          </CardHeader>
          <Table className="align-items-center table-flush" responsive>
              <tbody>
                  {/* set if statment if they already have aproval set */}
                  {this.state.food_list? (this.state.food_list.map((item,index) =>{
                           return(
                              <tr>
                                  <th scope="row">{item.food_name} : ${item.price}</th>
                                  <td><Button outline color="danger" onClick={()=>this.handleDelete(index)}>Delete</Button></td>
                              </tr>
                          );
                      })): <></>
                  }
                <div className="box">
                  <h1>Add Item to Menu</h1>
                  {/* <p>{this.state.username}</p> */}
                  <input onChange={this.handleChange_food} placeholder="Food Item" />
                
                  <input onChange={this.handleChange_price} placeholder="Price" />

                  <Button outline color="success" onClick={this.handleclick}>Add</Button>
                
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

export default Cook;