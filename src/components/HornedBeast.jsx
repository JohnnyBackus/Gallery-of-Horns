import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import SelectedBeast from './BeastModal.jsx';
// import styles from './hornedbeast.module.css';


function HornedBeast(props) {
  const [favorite, setFavorite] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const handleClick = () => {
    setFavorite(favorite + 1);
    setModalShow(true);
  };
    
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} alt={props.alt} title={props.title} onClick={handleClick} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <p>{props.description}</p>
          <div><span style={{ color: 'red' }}>&#10084;</span> Favorites: {favorite}</div> 
        </Card.Text>
      </Card.Body>
    </Card>

    {modalShow && (
    <SelectedBeast 
      src={props.src} 
      alt={props.alt} 
      title={props.title} 
      description={props.description} 
      show={modalShow}
      onHide={() => setModalShow(false)}
      />
  )}
    </>
  );
}

export default HornedBeast;
