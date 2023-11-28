import React from 'react';
import styles from './hornedbeast.module.css';

function HornedBeast(props) {
  return (
    <>
    <h2>{props.title}</h2>
    <img src={props.src} alt={props.alt} title={props.title} />
    <p>{props.description}</p>
    </>
  )
}

export default HornedBeast;