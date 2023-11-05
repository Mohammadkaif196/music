import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from '../library/Library';
import Feed from '../feed/Feed';
import Trending from '../trending/Trending';
import Player from '../player/Player';
import Favourites from '../favourites/Favourites';
import Sidebar from '../../components/Sidebar';
import home from './home.css'
// import '../../components/sidebar'
export default function Home() {
  return (
    <Router>
        <div className='main-body'>
          <sidebar/>
        <Routes>
            <Route path="/" element={<Library/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/trending" element={<Trending/>}/>
            <Route path="/player" element={<Player/>}/>
            <Route path="/Favourites" element={<Favourites/>}/>
       </Routes>
        </div>
    </Router>
    // <div>
    //   home page
    // </div>
   
  );
}
