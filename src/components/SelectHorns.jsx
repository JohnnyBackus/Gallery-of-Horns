/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
// import styles from './selecthorns.module.css';

function SelectHorns(props) {
  return (
    <Form.Select aria-label="hornFilter" onChange={props.handleFilter} >
      <option>Filter Images Here</option>
      <option value="1">only one horn</option>
      <option value="2">double the horns</option>
      <option value="3">triple threats</option>
      <option value="100">noble centurians</option>
    </Form.Select>
  );
}

export default SelectHorns;