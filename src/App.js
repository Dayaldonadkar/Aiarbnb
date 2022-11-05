import React from 'react';
import Header from './Header';
import Home from './Home';
import Footerr from './Footerr';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='search' element={<SearchPage/>} />
        </Routes>
      </BrowserRouter>
    <Footerr/>
    </>
  )
}

export default App;