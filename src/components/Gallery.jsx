import React from 'react';
import styles from './gallery.module.css';
import HornedBeast from './HornedBeast.jsx';

function Gallery(props) {
  return (
    <>
    {props.data.map((beast) => (
      <HornedBeast 
        key={beast._id} 
        title={beast.title} 
        src={beast.image_url} 
        alt={beast.keyword}
        description={beast.description}
      />
  ))}
    </>
  );
}

export default Gallery;