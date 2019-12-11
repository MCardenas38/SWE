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
import { breakStatement, exportDefaultSpecifier } from '@babel/types';
import "../Manager.css";
import Sm_container from "../components/sm_container_div";
import Lg_container from "../components/lg_container_div";
import Axios from "axios";

class Manager extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // name: this.props.location.state.id
            u_name: this.props.location.state.u_name,
            u_role: this.props.location.state.u_role,
            user_id: this.props.location.state.user_id,
            approval_list: [],
            bids_start: [],
            bids_end: [],
            bids_complete: [],
            restaurant_name:""
        };
    }
    componentDidMount(){
        console.log(this.state);
        Axios.get("/api/restaurant_name",{
            params:{
                manager_id: this.state.user_id
            }
        }).then(
            res1 => {
                console.log(res1.data);
                Axios.get("/api/approval_list",{
                    params:{
                        restaurant_name: res1.data.restaurant_name,
                        approval: null
                    }
                }).then(
                    res2 => {
                        console.log(res1.data.restaurant_name);
                        Axios.get("/api/bids_start",{
                            params:{
                                restaurant_name: res1.data.restaurant_name
                            }
                        }).then(
                            res3=>{
                                Axios.get("/api/bids_end",{
                                    params:{
                                        restaurant_name: res1.data.restaurant_name
                                    }
                                }).then(
                                    res4=>{
                                        Axios.get("/api/bids_complete",{
                                            params:{
                                                restaurant_name: res1.data.restaurant_name
                                            }
                                        }).then(
                                            res5=>{
                                                this.setState({
                                                        approval_list: res2.data,
                                                        restaurant_name: res1.data.restaurant_name,
                                                        bids_start: res3.data,
                                                        bids_end: res4.data,
                                                        bids_complete: res5.data
                                                    })
                                            }
                                        )
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }

    // this.setState({
    //     approval_list: res2.data,
    //     restaurant_name: res1.data.restaurant_name,
    //     bids: res3.data
    // })

    handleApproval= id => {
        let customer= this.state.approval_list[id];
        let length= this.state.approval_list.length;
        let temp= [];
        if(id===0){
            temp= this.state.approval_list;
            temp.shift();
        }
        else if(id+1===length){
            temp= this.state.approval_list;
            temp.pop();
        }
        else{
            temp.splice(id, 1);
        }
        Axios.put("/api/approval_list",{
            customer_id: customer.customer_id,
            restaurant_name: customer.restaurant_name,
            approval: 1
        }).then(res =>{
            console.log("Updated");
            console.log(temp);
            this.setState({
                approval_list: temp
            });
        });
    };

    handleDeny= id => {
        let customer= this.state.approval_list[id];
        let length= this.state.approval_list.length;
        let slice1= this.state.approval_list.slice(-1,id-1);
        let slice2= this.state.approval_list.slice(id+1,length);
        let temp= [];
        if(id===0){
            temp= this.state.approval_list;
            temp.shift();
        }
        else if(id+1===length){
            temp= this.state.approval_list;
            temp.pop();
        }
        else{
            let slice1= this.state.approval_list.slice(1,id);
            let slice2= this.state.approval_list.slice(id+2,length);
            temp= slice1+slice2;

        }
        Axios.put("/api/approval_list",{
            customer_id: customer.customer_id,
            restaurant_name: customer.restaurant_name,
            approval: 0
        }).then(res =>{
            console.log("Updated");
            console.log(temp);
            this.setState({
                approval_list: temp
            });
        });
    };

    handle_Start= id =>{
        let temp= this.state.bids_start;
        let bid= temp[id];
        Axios.put("/api/start_bid",{
            order_id: bid.order_id
        })
        .then(Axios.get("/api/bids_start",{
            params:{
                restaurant_name: this.state.restaurant_name
            }
        }).then(
            res3=>{
                Axios.get("/api/bids_end",{
                    params:{
                        restaurant_name: this.state.restaurant_name
                    }
                }).then(
                    res4=>{
                        Axios.get("/api/bids_complete",{
                            params:{
                                restaurant_name: this.state.restaurant_name
                            }
                        }).then(
                            res5=>{
                                this.setState({
                                        bids_start: res3.data,
                                        bids_end: res4.data,
                                        bids_complete: res5.data
                                    })
                            }
                        )
                    }
                )
            }
        ))
    }

    handle_End= id =>{
        let temp= this.state.bids_end;
        let bid= temp[id];
        Axios.put("/api/end_bid",{
            order_id: bid.order_id
        }).then(
        Axios.get("/api/bids_start",{
            params:{
                restaurant_name: this.state.restaurant_name
            }
        }).then(
            res3=>{
                Axios.get("/api/bids_end",{
                    params:{
                        restaurant_name: this.state.restaurant_name
                    }
                }).then(
                    res4=>{
                        Axios.get("/api/bids_complete",{
                            params:{
                                restaurant_name: this.state.restaurant_name
                            }
                        }).then(
                            res5=>{
                                this.setState({
                                        bids_start: res3.data,
                                        bids_end: res4.data,
                                        bids_complete: res5.data
                                    })
                            }
                        )
                    }
                )
            }
        )
     )
    }



    render(){
        return(
            <>
            <Col xl="4">
                    {/* APPROVAL TABLE */}
                <Card className="shadow">
                <CardHeader className="border-0">
                    <Row className="align-items-center">
                    <div className="col">
                        <h3 className="mb-0">Needs Approval</h3>
                    </div>
                    <div className="col text-right">
                    </div>
                    </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                    <tbody>
                        {/* set if statment if they already have aproval set */}
                        {this.state.approval_list? (this.state.approval_list.map((user,index) =>{
                                 return(
                                    <tr>
                                        <th scope="row">{user.customer_name}</th>
                                        <td><Button outline color="success" onClick={()=>this.handleApproval(index)}>Approve</Button></td>
                                        <td><Button outline color="danger" onClick={()=>this.handleDeny(index)}>Decline</Button></td>
                                    </tr>
                                );
                            })): <></>
                        }
                    </tbody>
                </Table>
                </Card>
            </Col>

            <Col xl="4">
                    {/* START BID TABLE */}
                <Card className="shadow">
                <CardHeader className="border-0">
                    <Row className="align-items-center">
                    <div className="col">
                        <h3 className="mb-0">Orders to Start Bid</h3>
                    </div>
                    <div className="col text-right">
                    </div>
                    </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                    <tbody>
                        {/* set if statment if they already have aproval set */}
                        {this.state.bids_start?(this.state.bids_start.map((bid,id)=>{
                            
                                return(<tr>
                                    <th scope="row">{bid.order_id}</th>
                                    <td>{bid.price}</td>
                                    <td>
                                        <Button outline color="success"  onClick={()=>{this.handle_Start(id)}}>Start</Button>
                                    </td>
                                </tr>)
                            })):<></>
                        }
                    </tbody>
                </Table>
                </Card>
            </Col>

            <Col xl="4">
                    {/* START BID TABLE */}
                <Card className="shadow">
                <CardHeader className="border-0">
                    <Row className="align-items-center">
                    <div className="col">
                        <h3 className="mb-0">Orders to End Bid</h3>
                    </div>
                    <div className="col text-right">
                    </div>
                    </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                    <tbody>
                        {/* set if statment if they already have aproval set */}
                        {this.state.bids_end?(this.state.bids_end.map((bid,id)=>{
                            
                                return(<tr>
                                    <th scope="row">{bid.order_id}</th>
                                    <td>{bid.price}</td>
                                    <td>
                                        <Button outline color="danger"  onClick={()=>{this.handle_End(id)}}>End</Button>
                                    </td>
                                </tr>)
                            })):<></>
                        }
                    </tbody>
                </Table>
                </Card>
            </Col>

            <Col xl="4">
                    {/* START BID TABLE */}
                <Card className="shadow">
                <CardHeader className="border-0">
                    <Row className="align-items-center">
                    <div className="col">
                        <h3 className="mb-0">Completed</h3>
                    </div>
                    <div className="col text-right">
                    </div>
                    </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                    <tbody>
                        {/* set if statment if they already have aproval set */}
                        {this.state.bids_complete?(this.state.bids_complete.map((bid,id)=>{
                            
                                return(<tr>
                                    <th scope="row">{bid.order_id}</th>
                                    <td>{bid.price}</td>
                                    <td>
                                        Complete
                                    </td>
                                </tr>)
                            })):<></>
                        }
                    </tbody>
                </Table>
                </Card>
            </Col>

            </>
        );
    }

}

export default Manager;