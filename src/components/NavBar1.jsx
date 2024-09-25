// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'

const NavBar1 = () => {
  return (
   
    <div className="navbar bg-gray-300 text-white hover:text-blue-500 shadow-md">
      <div className="flex-1">
     
        <a className="btn btn-ghost btn-case text-2xl font-bold text-black hover:text-blue-500"><i class='bx bxs-dog'><bold>NOVA</bold></i></a>
        <h1 className="text-4xl ml-1 font-bold text-black ">PET Care</h1>
      </div>
  
      <div className="flex-none">
             <ul className="menu menu-horizontal px-1 font-bold text-black hover:text-blue-500">
          <li><Link to ="/Home">Home</Link></li>
          <li><Link to ="/prices">Prices</Link></li>
          <li><Link to ="/Contact">Contact</Link></li>
          <li><Link to ="/DogList">DogList</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar1;

