import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Event from './Pages/Event'
import Day1 from './Pages/Day1'
import Day2 from './Pages/Day2'
import Day3 from './Pages/Day3'
import Informatica from './Pages/Informatica';
import Emulsion from './Pages/Emulsion';
import Robotic from './Pages/Robotic'
import Equilibria from './Pages/Equilibria'
import Mathametical from './Pages/Mathametical'
import Electronic from './Pages/Electronic'
import Biogenesis from './Pages/Biogenesis'
import Optica from './Pages/Optica'
import Strategia from './Pages/Strategia'

function App() {
  return (
    <div>
        <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/event' element={<Event />}></Route>
            <Route path='/day1' element={<Day1 />}></Route>
            <Route path='/day2' element={<Day2 />}></Route>
            <Route path='/day3' element={<Day3 />}></Route>
            <Route path='/informatica' element={<Informatica />}></Route>
            <Route path='/emulsion' element={<Emulsion />}></Route>
            <Route path='/robotic' element={<Robotic />}></Route>
            <Route path='/equilibria' element={<Equilibria />}></Route>
            <Route path='/mathametical' element={<Mathametical />}></Route>
            <Route path='/electronic' element={<Electronic />}></Route>
            <Route path='/biogenesis' element={<Biogenesis />}></Route>
            <Route path='/optica' element={<Optica />}></Route>
            <Route path='/strategia' element={<Strategia />}></Route>
         </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App