import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
// import styles from './hornedbeast.module.css';


function HornedBeast(props) {
  const [favorite, voteFavorite] = useState(0);
  const handleClick = () => {
    voteFavorite(favorite + 1);
  }
    
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} alt={props.alt} title={props.title} onClick={handleClick} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <p>{props.description}</p>
          <p><span style={{ color: 'red' }}>&#10084;</span> Favorites: {favorite}</p> 
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default HornedBeast;