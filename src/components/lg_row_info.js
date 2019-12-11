import React from 'react';
import PropTypes from 'prop-types'
import {
  Card, Row, Col, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Progress, CardHeader,
  Button, Table, Container
} from 'reactstrap';
import { CardColumns } from 'react-bootstrap';
import { breakStatement } from '@babel/types';

const lg_row_info= props =>{
    return(
    <tr>
        <th scope="row">{props.row_info1}</th>
        <td>{props.row_info2}</td>
        <td>{props.row_info3}</td>
        <td>
            <i className="fas fa-arrow-up text-success mr-3" />{" "}
            {props.row_info4}
        </td>
    </tr>
    );
}

export default lg_row_info;