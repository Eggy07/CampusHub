import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className="bg-slate-900	 text-white py-4 z-40 h-20">
      <div className="container mx-auto px-4 flex items-center h-20">
        <Link to="/dashboard">
          <img id='logo' src="logo1.png" alt="logo" className='absolute top-0 left-0 h-[90px]'></img>
        </Link>
        <Link to="/dashboard" className="text-white text-2xl font-bold transition ease-in-out duration-300 hover:text-slate-500 relative left-2 top-[-18%] ">CampusHub</Link>
        <nav className="flex space-x-4">
          <a href="#" className="text-white hover:text-orange-600"></a>
          <a href="#" className="text-white hover:text-orange-600"></a>
          <a href="#" className="text-white hover:text-orange-600"></a>
          <a href="#" className="text-white hover:text-orange-600"></a>
        </nav>
        <div className="flex items-center">

        </div>
      </div>
    </header>
  );
};

export default Header;