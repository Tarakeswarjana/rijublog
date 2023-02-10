import React from 'react';

import '../css/Navbar.css'

    



const Navbar = () => {
  return (
    <div className="cotainer">
        <div className='right'>
         <img src="tree-gec67ab3f2_640.jpg" alt='no element'/>
        </div>
        <div className='mid'>
          <h1>Incredible facts</h1>
        </div>
        <div className='left'>
         <ul>
        
          <li><a href='/home'>Home</a></li>
          <li><a href='/feed'>videos</a></li>
          <li><a href='/upload'>upload</a></li>
         </ul>
        
        </div>
      
    </div>
  );
}

export default Navbar;
