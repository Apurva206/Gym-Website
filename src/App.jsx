import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import RegistrationForm from './form';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import HomeData from './components/Data/HomeData';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<div className="container mx-auto my-180 px-87 py-53 justify center h-screen gap-[10px]">
          <h1 className='mb-[100px] mt-[50px] ml-[550px]  text-2xl font-serif font-semibold'>Home</h1>
          {HomeData.map((id, index) => (
            <Home
              key={id.id}
              title={id.title}
              text={id.text}
              btnText={id.btnText}
            />
          ))}
        </div>} />

          <Route path="/about" element={<div className="container mx-auto my-180 px-87 py-53">
          <h1 className='mb-[100px] mt-[50px] ml-[550px]  text-2xl font-serif font-semibold'>About Us</h1>
          <About
            title="Description"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac malesuada elit. Mauris aliquam erat nec nulla ultricies, vel facilisis quam accumsan.In eget tellus luctus, pulvinar justo nec, dignissim felis. Proin malesuada sollicitudin sapien, nec ullamcorper dui accumsan vitae. Nullam sodales metus ut dui ullamcorper tincidunt. Etiam id rutrum nisl. Phasellus scelerisque ante in urna feugiat, et facilisis nisl interdum. Nulla finibus enim vel neque rhoncus vulputate."
            btnText="Read More"
          />
        </div>} />

          <Route path="/contact" element={<div className="container mx-auto my-180 px-87 py-53">
          <h1 className='mb-[100px] mt-[50px] ml-[550px]  text-2xl font-serif font-semibold'>Contact Us</h1>
          <Contact
            title="Description"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac malesuada elit. Mauris aliquam erat nec nulla ultricies, vel facilisis quam accumsan."
          />
          <RegistrationForm />
        </div>} />
        </Routes>

        

        
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

