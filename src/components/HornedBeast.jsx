import React, {useState} from 'react';
// import styles from './hornedbeast.module.css';



function HornedBeast(props) {
  const [favorite, voteFavorite] = useState(0);
  const handleClick = () => {
    voteFavorite(favorite + 1);
  }
    
  return (
    <>
    <h2>{props.title}</h2>
    <img src={props.src} alt={props.alt} title={props.title} onClick={handleClick} />
    <p>{props.description}</p>
    <p>{'\u2764'} Favorites: {favorite}</p>
    </>
  )
}

export default HornedBeast;