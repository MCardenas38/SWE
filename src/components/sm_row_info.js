import React from 'react';
import PropTypes from 'prop-types'
import {
  Card, Row, Col, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Progress, CardHeader,
  Button, Table, Container
} from 'reactstrap';
import { CardColumns } from 'react-bootstrap';
import { breakStatement } from '@babel/types';

const sm_row_info= (props) => {
    return(
    <tr>
        <th scope="row">{props.row_info1}</th>
        <td>{props.row_info2}</td>
        <td>
            <div className="d-flex align-items-center">
            <span className="mr-2">{props.row_info3}</span>
            <div>
                <Progress
                max="100"
                value="60"
                barClassName="bg-dark-danger"
                />
            </div>
            </div>
        </td>
    </tr>
    );
}

export default sm_row_info;