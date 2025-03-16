import React from 'react';
import Header from './components/header/Header';
import Hero from './components/Hero';
import Units from './components/units';
import AboutUs from './components/aboutus';
import Services from './components/services';
import { MenuMobile } from './components/header/menuMobile';
import Local from './components/localization';
import Footer from './components/footer';
import CookieConsent from './components/cookies';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div>
        <Header />
        <MenuMobile/>
        <CookieConsent/>
        <Hero />
        <Units/>
        <AboutUs/>
        <Services/>
        <Local/>
        <Footer/>
      </div>
    </div>
  )
}