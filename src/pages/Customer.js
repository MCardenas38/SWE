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
              <Container className="mt--7" fluid>
                <Row className="mt-5">
                  <Col className="mb-5 mb-xl-0" xl="8">
                    <Card className="shadow">
                      <CardHeader className="border-0">
                        <Row className="align-items-center">
                          <div className="col">
                            <h3 className="mb-0">Restuarants</h3>
                          </div>
                        </Row>
                      </CardHeader>
                      <Table className="align-items-center table-flush" responsive>
                        <tbody>
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
                                    <tr>
                                        <td><img src={restuarant.img_src}></img></td>
                                        <td>{restuarant.restaurant_name}</td>
                                        <td>{restuarant.address}</td>
                                        <td>

                                        </td>
                                    </tr>
                                  </Link>
                                )
                          })): <></>
                        }
                        </tbody>
                      </Table>
                    </Card>
                  </Col>
                </Row>
            </Container>
            </>
        );
    }

}

export default Customer;