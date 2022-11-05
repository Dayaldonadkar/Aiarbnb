import React, {useState} from 'react';
import './Banner.css';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const[showSearch, setShowSearch] =useState(false);
  const navigate=useNavigate();
  const handle = () => {
    navigate('/search')
  }
  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearch && <Search/>}
        
        <button onClick={() => setShowSearch(!showSearch)} 
          className='banner__searchButton'>{showSearch ? "Hide":"Search Dates"} </button> 
      </div>
        <div className='banner__info'>
            <h1>Get out and stretch your Imagination</h1>
            <h5>Plan a different kind of gateway to uncover the hidden gems near you.</h5>
            <button onClick={handle}>Explore Nearby</button>
        </div>
         
    </div>
  )
}

export default Banner;