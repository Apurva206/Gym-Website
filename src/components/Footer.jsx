import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
const Footer=()=>{
    return(
        <div className='footer bg-SlateGrey p-[5rem] mb-6 flex justify-between m-auto '>
            <div>
            <h1 className='text-[25px]'>
                <strong>Fitness</strong>Gym</h1>
            </div>
             <ul>
                <span className='text-[18px] font-semibold text-white'>
                    Company
                </span>

                <li className='text-white '>About Us</li>
                <li className='text-white'>Features</li>
                <li className='text-white'>News</li>
                <li className='text-white'>FAQ</li>
             </ul>
             
             <div>

                 <span className='text-[18px] font-semibold text-white'>
                     Contact Info
                 </span>
                 <div>
                    <small>abc@gmail.com</small>
                    <div className='flex gap-4 text-2xl'>    
                    <AiOutlineInstagram/>
                    <AiOutlineFacebook/>
                    <AiFillTwitterCircle/>
                    </div>
                 </div>
                 </div>
                
              </div>
             
    )
}

export default Footer;