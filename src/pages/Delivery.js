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
import { breakStatement } from '@babel/types';
import "../Manager.css";
import Sm_container from "../components/sm_container_div";
import Lg_container from "../components/lg_container_div";
import Axios from "axios";

class Customer extends Component{

  constructor(props) {
    super(props);
    this.state = {
        // name: this.props.location.state.id
        u_name: this.props.location.state.u_name,
        u_role: this.props.location.state.u_role,
        user_id: this.props.location.state.user_id,
        bids: [],
        your_delivery: [],
        bidding: {},
        price:0,
        modal: false, 
        setModal: false
    };
  }

    componentDidMount(){
      Axios.get("/api/delivery")
      .then(res=>{
        this.setState({
          bids: res.data
        });
        Axios.get("/api/your/delivery",{
            params:{
                delivery_id: this.state.user_id
            }
        }).then(res2=>{
            this.setState({
                your_delivery: res2.data
            })
        });
      });
    }


    set_bid= id =>{
        let modal= !this.state.modal;
        let setModal= !this.state.setModal;
        let bid_item= this.state.bids[id];
        this.setState({
            modal: modal,
            setModal: setModal,
            bidding: bid_item
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

    handleChange_price= (e)=>{
        this.setState({
          price: e.target.value
        });
    }

    setBiddingPrice= () =>{
        let modal= !this.state.modal;
        let setModal= !this.state.setModal;
        console.log(this.state.bidding);
        console.log(this.state.price);
        if(this.state.bidding.bid_price>this.state.price){
            Axios.put("/api/delivery/bid",{
                delivery_id: this.state.user_id,
                bid_price: this.state.price,
                order_id: this.state.bidding.order_id
            }).then(res=>{
                if(res){
                    console.log("Success");
                    Axios.get("/api/delivery")
                    .then(res=>{
                        this.setState({
                            bids: res.data,
                            modal: modal,
                            setModal: setModal
                        });
                        Axios.get("/api/your/delivery",{
                            params:{
                                delivery_id: this.state.user_id
                            }
                        }).then(res2=>{
                            this.setState({
                                your_delivery: res2.data
                            })
                        });
                    });
                }
                else{
                    return(
                        <alert>Bidding Closed!</alert>
                    )
                }
            })
        }

    }

    render(){
        return(
            <>
              <Container className="mt--7" fluid>
                <Row className="mt-5">

                  <Col className="mb-5 mb-xl-0" xl="8">
                    <Card className="shadow">
                      <CardHeader className="border-0">
                        <Row className="align-items-center">
                          <div className="col">
                            <h3 className="mb-0">Bids</h3>
                          </div>
                        </Row>
                      </CardHeader>
                      <Table className="align-items-center table-flush" responsive>
                        <tbody>
                          {/* <Link to={`customer/${props}`}> */}
                          {this.state.bids? (this.state.bids.map((order,index)=>{
                                return(
                                    <tr onClick={()=>this.set_bid(index)}> 
                                        <td>{order.restaurant_name}</td>
                                        <td>{order.address}</td>
                                        <td>${order.bid_price}</td>
                                    </tr>
                                )
                          })): <></>
                        }
                        </tbody>
                      </Table>
                    </Card>
                  </Col>

                  <Col className="mb-5 mb-xl-0" xl="8">
                    <Card className="shadow">
                      <CardHeader className="border-0">
                        <Row className="align-items-center">
                          <div className="col">
                            <h3 className="mb-0">Your Delivery</h3>
                          </div>
                        </Row>
                      </CardHeader>
                      <Table className="align-items-center table-flush" responsive>
                        <tbody>
                          {/* <Link to={`customer/${props}`}> */}
                          {this.state.your_delivery? (this.state.your_delivery.map((order,index)=>{
                                return(
                                  <tr > 
                                    <td>{order.restaurant_name}</td>
                                    <td>{order.address}</td>
                                    <td>Order ID: {order.order_id}</td>
                                  </tr>
                                )
                          })): <></>
                        }
                        </tbody>
                      </Table>
                    </Card>
                  </Col>

                </Row>
            </Container>
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody className="align-items-center">
                        <h3>Place Bid: </h3>
                        <input onChange={this.handleChange_price}></input>
                        <button onClick={this.setBiddingPrice}>Submit</button>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>  
            </>
        );
    }

}

export default Customer;