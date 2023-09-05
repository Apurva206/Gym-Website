import React, { useEffect, useState } from 'react';

function RegistrationForm() {
  const data = { name: "", email: "", password: "" };
  const [InputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log('Registered');
  }, [flag]);

  function handleData(e) {
    setInputData({ ...InputData, [e.target.name]: e.target.value });
    console.log(InputData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (InputData.name === "" || InputData.email === "" || InputData.password === "") {
      alert("Please fill in all fields");
      return;
    } else {
      setFlag(true);
    }
  }

  return (
    <>
      <pre>{flag ? <h2>Hi {InputData.name}, You have Filled Form Successfully</h2> : ""}</pre>
      <form className='container' onSubmit={handleSubmit}>
        <div className='header text-2xl font-bold'>
          <h1>Inquiry Form</h1>
        </div>
        <div>
          <input type='text'className='border-2 border-black' placeholder='Enter your Name'
            name='name' value={InputData.name} onChange={handleData}></input>
        </div>
        <div>
          <input type='text'className='border-2 border-black' placeholder='Enter your Email'
            name='email' value={InputData.email} onChange={handleData}></input>
        </div>
        <div>
          <input type='text'className='border-2 border-black' placeholder='Enter your Password'
            name='password' value={InputData.password} onChange={handleData}></input>
        </div>
        <div>
          <button type='submit'className='border-[2px] rounded-[6px] bg-SlateGrey text-white hover:text-grey mt-[6px]'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default RegistrationForm;
