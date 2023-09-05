import React from 'react';

const About = ({ title, text, btnText }) => {
  return (
    <div className='About pb-[30px]'>
      <img src='img/img2.jpg' alt=''/>
      <h2 className='title text-1xl font-serif font-semibold'>{title}</h2>
      <p className='pt-[16px] mt-[16px] pb-[15px]'>{text}</p>
      <div className='btn'>
        <button className='border-[2px] rounded-[6px] bg-SlateGrey text-white hover:text-grey'>{btnText}</button>
      </div>
    </div>
  );
}

export default About;
