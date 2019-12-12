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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Customer extends Component{

  constructor(props) {
    super(props);
    this.state = {
        // name: this.props.location.state.id
        u_name: this.props.location.state.u_name,
        u_role: this.props.location.state.u_role,
        user_id: this.props.location.state.user_id,
        restuarant_list: []
    };
  }

    componentDidMount(){
      Axios.get("/api/restaurant_list")
      .then(res=>{
        this.setState({
          restuarant_list: res.data
        });
        console.log(this.state.restuarant_list);
        // console.log(res);
      });
    }

    render(){
        return(
            <>
              <Container className="mt--7" className="fluid">
                <Row className="mt-5">
                  <Col className="mb-5 mb-xl-0" xl="8">
                    <Card className="shadow">
                      <CardHeader className="border-0">
                        <Row className="align-items-center">
                          <div className="col">
                            <h3 className="mb-0">Restaurants</h3>
                          </div>
                        </Row>
                      </CardHeader>
                      </Card>

                      <Card>
                      <CardBody className="align-items-center table-flush" responsive>
                          {/* <Link to={`customer/${props}`}> */}
                          {this.state.restuarant_list? (this.state.restuarant_list.map((restuarant,index)=>{
                                return(
                                  <Link style={{ textDecoration: 'none', color: '#000000' }} to={{
                                    pathname: "customer/"+restuarant.restaurant_name,
                                    state:{
                                      u_name: this.state.u_name,
                                      u_role: this.state.u_role,
                                      user_id: this.state.user_id,
                                      restaurant_name: restuarant.restaurant_name
                                    }
                                  }}>
                                    <Row>
                                    <Col><h5>{restuarant.restaurant_name}</h5></Col>
                                    <Col>Address</Col>
                                    </Row>
                                    <Row>
                                        <Col><img src={restuarant.img_src} width="200px" height="200px"/></Col>
                                        <Col className="text-muted">{restuarant.address}</Col>
                                    </Row>
                                  </Link>
                                )
                          })): <></>
                        }
                        <Col>
                        </Col>
                        </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <Row>
                        <Col><h5>BBQ Joint</h5></Col>
                        <Col>Address</Col>
                        </Row>
                        <Row>
                          <Col>
                          <img src="https://s3-media1.fl.yelpcdn.com/bphoto/YWMehMtfQu57zztvCNr3jQ/o.jpg" width="200px" height="200px"/>
                          </Col>
                          <Col className="text-muted">
                            16005 84th ave Harlem NY
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <Row>
                        <Col><h5>Chicken Spot</h5></Col>
                        <Col>Address</Col>
                        </Row>
                        <Row>
                          <Col>
                          <img src="https://s3-media2.fl.yelpcdn.com/bphoto/aX-TMDOSS2vO-0L47FoZ0Q/o.jpg" width="200px" height="200px"/>
                          </Col>
                          <Col className="text-muted">
                            11-17 Parking Drive Brooklyn NY
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
            </Container>
            </>
        );
    }

}

export default Customer;