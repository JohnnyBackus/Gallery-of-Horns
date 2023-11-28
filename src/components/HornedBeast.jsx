import React from 'react';
import styles from './footer.module.css';

function HornedBeast(props) {
  return (
    <>
    <h2>{props.title}</h2>
    <img src={props.src} alt='' title='' />
    <p></p>
    </>
  )
}

export default HornedBeast;