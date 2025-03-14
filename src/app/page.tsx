import React from 'react';
import Header from './components/header/Header';
import Hero from './components/Hero';
import Units from './components/units';
import AboutUs from './components/aboutus';
import Services from './components/services';
import { MenuMobile } from './components/header/menuMobile';
import Local from './components/localization';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div>
        <Header />
        <MenuMobile/>
        <Hero />
        <Units/>
        <AboutUs/>
        <Services/>
        <Local/>
      </div>
    </div>
  )
}