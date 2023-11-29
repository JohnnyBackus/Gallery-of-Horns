import React from 'react';
import beastData from './assets/beastData.json';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header title = 'Gallery of Horns' />
      <Gallery beastData = {beastData} />
      <Footer />
    </>
  )
  }

export default App;
