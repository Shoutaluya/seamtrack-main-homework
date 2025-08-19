import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import Modules from './Components/Modules';
import PersonalisedDashboard from './Components/PersonalisedDashboard';
import SafeSmartNigerian from './Components/SafeSmartNigerian';
import ElevateYourSchool from './Components/ElevateYourSchool';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import HomeworkBuddies from './Components/HomeworkBuddies';
import cutePic from "./assets/cutePic.png";

const Home = () => (
  <>
    <div>
      <Hero />
      <div className='max-sm:w-full max-sm:block hidden px-10'>
        {/* Mobile hero image */}
        <img
          src={cutePic}
          alt="Students learning together"
          className='w-[345px] h-[345px] rounded-[4px] object-cover opacity-100'
          style={{ transform: 'rotate(0deg)' }}
        />
      </div>
    </div>
    <div className='flex flex-col gap-12 md:gap-20 pt-12 md:pt-20'>
      <Modules />
      <PersonalisedDashboard />
      <SafeSmartNigerian />
      <ElevateYourSchool />
      <Footer />
    </div>
  </>
);

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/homework-buddies" element={
          <>
            <HomeworkBuddies />
            <Footer />
          </>
        } />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
};

export default App;