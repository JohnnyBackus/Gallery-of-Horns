import React from 'react';
import data from './assets/beastData.json';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';


function App() {
  return (
    <>
      <Header title = 'Gallery of Horns' />
      <Gallery data = {data} />
      <Footer />
    </>
  )
  }

export default App
