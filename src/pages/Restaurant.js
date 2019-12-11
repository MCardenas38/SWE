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
Button, Table, Container,Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { CardColumns } from 'react-bootstrap';
import { breakStatement, throwStatement } from '@babel/types';
import "../Manager.css";
import Sm_container from "../components/sm_container_div";
import Lg_container from "../components/lg_container_div";
import Axios from "axios";

class Restuarant extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // name: this.props.location.state.id
            u_name: this.props.location.state.u_name,
            u_role: this.props.location.state.u_role,
            user_id: this.props.location.state.user_id,
            restuarant_name: this.props.location.state.restaurant_name,
            menu: [],
            order: [],
            top_3:[],
            total: 0,
            modal: false, 
            setModal: false,
            registered: false,
            style:""
        };
      }

    componentDidMount(){
        Axios.get("/api/menu",{
            params:{
                restaurant_name: this.state.restuarant_name
            }
        })
      .then(res=>{
        this.setState({
          menu: res.data
        });
        console.log(res.data);
        Axios.get("/api/top_3").then(res2=>{
            console.log(res2);
            var temp= this.state.top_3;
            temp.push(res2.data[0]);
            temp.push(res2.data[1]);
            temp.push(res2.data[2]);
            this.setState({
                top_3: temp
            });
            console.log(this.state.top_3);
            Axios.get("/api/restaurant_reg",{
                params:{
                    restaurant_name: this.state.restuarant_name,
                    customer_id: this.state.user_id,
                }
            }).then(res3=>{
                console.log(res3);
                if(res3.data!==null){
                    this.setState({
                        registered: true
                    });
                    console.log(this.state.registered)
                }
            })
        })
      });
    }

    handleAdd= id=>{
        let item= this.state.menu[id];
        console.log(item);
        let total= this.state.total;
        let order= this.state.order;
        let count= item.food_count + 1;
        total += item.price;
        order.push({food_name: item.food_name, price:item.price,food_id: item.food_id});
        this.setState({
            order: order,
            total: total
        });
        Axios.put("/api/food_count",{
            food_id: item.food_id,
            food_count: count
        }).then(res =>{
            Axios.get("/api/menu",{
                params:{
                    restaurant_name: this.state.restuarant_name
                }
            })
            .then(res=>{
                this.setState({
                menu: res.data
                });
            // console.log(this.state.restuarant_list);
            console.log(res.data);
            });
            console.log(res);
        })
    }

    handleRemove= id=>{
        let order= this.state.order;
        let length= order.length;
        let item= order[id];
        let total= this.state.total;
        let count;
        for(var i=0;i<this.state.menu.length;++i){
            if(item.food_id===this.state.menu[i].food_id){
                count= this.state.menu[i].food_count;
                break;
            }
        }
        count -= 1;
        total -= item.price;
        if(id===0){
            order.shift();
        }
        else if(id+1===length){
            order.pop();
        }
        else{
            order.splice(id, 1);
        }
        this.setState({
            order: order,
            total: total
        });
        Axios.put("/api/food_count",{
            food_id: item.food_id,
            food_count: count
        }).then(res =>{
            console.log(res);
        })
    }

    handleOrder= () => {
        Axios.post("/api/process_order",{
            customer_id: this.state.user_id,
            price: this.state.total,
            restaurant_name: this.state.restuarant_name,
            bid_start: 0,
            bid_price: 10
        }).then(res=>{
            console.log(res);
            let modal= !this.state.modal;
            let setModal= !this.state.setModal;
            this.setState({
                modal: modal,
                setModal: setModal
            });
        });
    }

    toggle= ()=>{
        let modal= !this.state.modal;
        let setModal= !this.state.setModal;
        this.setState({
            modal: modal,
            setModal: setModal
        });
    }

    handle_Reg= ()=>{
        Axios.post("/api/restaurant_reg",{
            customer_id: this.state.user_id,
            customer_name: this.state.u_name,
            restaurant_name: this.state.restuarant_name,
        }).then(res=>{
            console.log(res);
            this.setState({
                style: {opacity: "0"}
            })
        })
    }


    render(){
        return(
            <>
                <Container className="mt--7" fluid>
                    <Row>
                    <Col xl="4">
                        <Card className="shadow">
                        <CardHeader className="border-0">
                            <Row className="align-items-center">
                            <div className="col">
                                <h3 className="mb-0">Menu</h3>
                            </div>
                            <div className="col text-right">
                            </div>
                            </Row>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                            <tr>
                                <th scope="col">Food Name</th>
                                <th scope="col">Price</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.menu?(this.state.menu.map((item,index)=>{
                                        return(
                                            <tr>
                                                <th scope="row">{item.food_name}</th>
                                                <td>{item.price}</td>
                                                <td>
                                                    <Button outline color="success" onClick={()=>{this.handleAdd(index)}}>Add</Button>
                                                </td>
                                            </tr>
                                        )
                                    })):<></>
                                }
                            </tbody>
                        </Table>
                        </Card>
                    </Col>

                    <Col xl="4">
                        <Card className="shadow">
                        <CardHeader className="border-0">
                            <Row className="align-items-center">
                            <div className="col text-left">
                                <h3 className="mb-0">Order</h3>
                            </div>
                            <div className="col text-right">
                                <h3 className="mb-0">Total: ${this.state.total}.00</h3>
                            </div>
                            <div className="col text-right">
                                <Button color="info" onClick={this.handleOrder}>Buy</Button>
                            </div>
                            </Row>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                            </thead>
                            <tbody>
                                {this.state.order?(this.state.order.map((item,index)=>{
                                        return(
                                            <tr>
                                                <th className="col text-left">{item.food_name}</th>
                                                <td></td>
                                                <td className="col text-right">
                                                    <Button outline color="danger" style={this.style} onClick={()=>{this.handleRemove(index)}}>Remove</Button>
                                                </td>
                                            </tr>
                                        )
                                    })):(()=>{return(
                                        <tr>
                                                <th scope="row"></th>
                                                <td>Add Items To Your Order!</td>
                                                <td>
                                                </td>
                                        </tr>
                                    )})
                                }
                            </tbody>
                        </Table>
                        </Card>
                    </Col>
                    </Row>
                    <Card>
                        <CardBody>
                            {this.state.top_3&&this.state.registered?(this.state.top_3.map((food,index)=>{
                                return(<CardText>{food.food_name}</CardText>)
                            })):<></>}
                            
                        </CardBody>
                    </Card>
                    {this.state.registered? <></>: <Button outline color="danger" onClick={this.handle_Reg}>Register</Button>}
                </Container>
                <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody className="align-items-center">
                        <img src="https://images.vexels.com/media/users/3/157890/isolated/lists/4f2c005416b7f48b3d6d09c5c6763d87-check-mark-circle-icon.png"></img>
                        <h3>Thank you! Your Order is being Processed</h3>
                    </ModalBody>
                    <ModalFooter>
                    <Link to={{
                        pathname: "/customer",
                        state:{
                            u_name: this.state.u_name,
                            u_role: this.state.u_role,
                            user_id: this.state.user_id
                        }
                    }} style={{ textDecoration: 'none' }}>
                    <Button color="primary" onClick={this.toggle}>Close</Button>{' '}
                    </Link>
                    </ModalFooter>
                </Modal>
                </div>                 

            </>
        );
    }

}

export default Restuarant;