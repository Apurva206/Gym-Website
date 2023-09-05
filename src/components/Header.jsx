import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';
//import img2 from '../img/img2.jpg';

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header flex justify-between items-center p-[0rem] md:flex md:px-10">
      <div className="left">
        {/*<img src={img2} alt="" />*/}
        <h1 className='text-[25px]'>
          <strong>Fitness</strong>Gym</h1>
      </div>
      <div className="mid ">
        <ul className="navbar hidden md:flex gap-12 ">
        <li className='navbar text-white hover:text-grey hover:underline'><Link to="/">Home</Link></li>
        <li className='navbar text-white hover:text-grey hover:underline'><Link to="/about">About</Link></li>
        <li className='navbar text-white hover:text-grey hover:underline'><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-black text-2xl md:hidden block' />
      <div className="right hidden md:flex gap-8">
        <button className="btn bg-SlateGrey rounded drop-shadow-2xl text-white hover:text-grey md:ml-8">Call Us</button>
        <button className="btn bg-SlateGrey rounded drop-shadow-2xl text-white hover:text-grey md:ml-8">Email Us</button>
      </div>

      {/*responsive menu*/}

      <ul className={`md:hidden w-full h-screen text-white fixed bg-black top-[80px] 
      ${toggle ? 'left-[0]' : 'left-[100%]'}`}>
        <li className='p-5'><Link to="/">Home</Link></li>
        <li className='p-5'><Link to="/about">About</Link></li>
        <li className='p-5'><Link to="/contact">Contact</Link></li>
        </ul>
      
    </header>
  );
}

export default Header;

