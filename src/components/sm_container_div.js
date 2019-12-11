import React from 'react';
import PropTypes from 'prop-types'
import {
  Card, Row, Col, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Progress, CardHeader,
  Button, Table, Container
} from 'reactstrap';
import { CardColumns } from 'react-bootstrap';
import { breakStatement } from '@babel/types';
import Sm_row from "./sm_row_info";

const sm_container_div= (props) => {
    console.log(props);
    return(
    <Col xl="4">
    <Card className="shadow">
      <CardHeader className="border-0">
        <Row className="align-items-center">
          <div className="col">
            <h3 className="mb-0">{props.table_name}</h3>
          </div>
          <div className="col text-right">
          </div>
        </Row>
      </CardHeader>
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            {
                props.info.col.map((info,index)=>{
                    return(<th scope="col">{info}</th>);
                })
            }
          </tr>
        </thead>
        <tbody>
            {
                props.info.row.map((info,index)=>{
                    return(<Sm_row {... info} />);
                })
            }
        </tbody>
      </Table>
    </Card>
  </Col>
    )
}

export default sm_container_div;