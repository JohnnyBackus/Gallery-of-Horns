import React from 'react';
import styles from './gallery.module.css';
import HornedBeast from './HornedBeast.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gallery(props) {
  return (
    <Container className={styles.container}>
    <Row>
    {props.beastData.map((beast) => (
      <HornedBeast 
        key={beast._id} 
        title={beast.title} 
        src={beast.image_url} 
        alt={beast.keyword}
        description={beast.description}
      />
      ))}
    </Row>
    </Container>
  );
}

export default Gallery;