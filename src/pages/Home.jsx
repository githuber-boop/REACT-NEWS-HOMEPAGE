import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Articles from '../components/Articles'


const Home = () => {
  return (
    <div className="container">
      <Navbar/>
      <Hero/>
      <Articles/>
    </div>
  );
}

export default Home;