import React, {useState} from 'react';
import beastData from './assets/beastData.json';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
// import BeastModal from './components/BeastModal.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <Header title = 'Gallery of Horns' />
      <Gallery beastData = {beastData} />
      {/* <SelectedBeast beastData = {beastData} /> */}
      <Footer />
    </>
  )
  }

export default App;
