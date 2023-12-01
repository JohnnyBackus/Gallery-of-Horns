import React, {useState} from 'react';
import beastData from './assets/beastData.json';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import SelectHorns from './components/SelectHorns.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [filteredBeasts, setFilteredBeasts] = useState(beastData)
  function handleFilter (event) {
    const value = parseInt(event.target.value);
    let gallery = beastData.filter(beast => beast.horns === value);
    setFilteredBeasts(gallery);
  }
  return (
    <>
      <Header title = 'Gallery of Horns' />
      <SelectHorns filteredBeasts = {filteredBeasts} handleFilter = {handleFilter} />
      <Gallery beastData = {filteredBeasts} />
      <Footer />
    </>
  )
}

export default App;
