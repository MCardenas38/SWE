import React from 'react';
import PropTypes from 'prop-types'
import {
  Card, Row, Col, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Progress, CardHeader,
  Button, Table, Container
} from 'reactstrap';
import { CardColumns } from 'react-bootstrap';
import { breakStatement } from '@babel/types';
import Lg_row from "./lg_row_info";

const lg_container_div= (props) => {
  return(
    <Container className="mt--7" fluid>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">{props.table_name}</h3>
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
                            return(<Lg_row {... info} />);
                        })
                    }
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
      </Container>
  );
}

export default lg_container_div;
