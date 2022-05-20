import './App.css';
import React from 'react';
import Header from './Components/Header';
import Coinpage from './Pages/Coinpage';
import Homepage from './Pages/Homepage';

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <Header/>
      </div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/coins' element={<Coinpage/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
