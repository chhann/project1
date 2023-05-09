import './App.css';
import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavLink from './commponents/navbar, footer/NavLink';
import Mainpage from './page/Mainpage';
import Products from './page/Products';
import Modal from './page/Modal';
import Looks from './page/Looks';
import Test from './commponents/Test';
import Filter from './page/Filter';
import Proudctlist from './commponents/productpage/Proudctlist';
import Last from './commponents/Last/Last';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink/>
      </header>

      <Routes>
        <Route path='/' element={<Mainpage/>} />
        <Route path='/pr' element={<Products/>}/>
        <Route path='/lo' element={<Looks/>}/>
        <Route path='/lo/:modelNo' element={<Modal/>}/>
        <Route path='/prlist' element={<Proudctlist/>}/>
        <Route path='/fi' element={<Filter/>}/>
  
      </Routes>

      <footer>
        <Last/>
      </footer>

      
      






      
    </div>
  );
}

export default App;
