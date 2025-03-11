import React from 'react';
import Header from './components/header/Header';
import Hero from './components/Hero';
import Units from './components/units';
import AboutUs from './components/aboutus';

export default function Home() {
  return (
    <div className="w-full">
      <div>
        <Header />
        <Hero />
        <Units/>
        <AboutUs/>
      </div>
    </div>
  )
}