import React from 'react';
// import Tugas7 from './Components/Tugas7/Tugas7';
import Tugas8 from './Components/ComponentsProps/ComponentProps';
import './Style/style.css';
import Button from './Components/ComponentsProps/Button';
import StateHooks from './Components/StateHooks/Materi';

function App() {
  return (
    <>
      {/* <Tugas7/> */}
      <Tugas8 name="Aziz" adress="Banyuwangi" email="azizvbi33@gmail.com" user="azizvbi"/>
      <Button/>
      <StateHooks/>
    </>
  );
}

export default App;
