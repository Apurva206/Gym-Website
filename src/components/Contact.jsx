import React from 'react';
const Contact=({title,text})=>{
    return (
        <>
        
        <div className='Contact pb-[30px]'>
            <img src='img/img2.jpg' alt=''/>
            <h2 className='title text-1xl font-serif font-semibold'>{title}</h2>
            <p className='pt-[16px] mt-[16px] pb-[15px]'>{text}</p>

        </div>
        
        </>
    )
}

export default Contact;