import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Pages/Home';
import Player from './Pages/Player/Player';
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavScrollExample from './Components/Navbar/Appbar';


export default function App() {
  return (
    <>
        <NavScrollExample/>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Player' element={<Player/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/About' element={<About/>} />
        </Routes>
        </BrowserRouter>
    </>
  )
}
