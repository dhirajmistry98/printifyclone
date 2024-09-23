import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Customization from './components/Customization'; 
import Create from './components/Create'; 
import Footer from './components/Footer';
import ConnectYourStore from './components/ConnectYourStore'; 
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Customization />
      <Create />
      <ConnectYourStore />
      <CallToAction/>
      <Testimonials /> 
      <MyComponent/>
       <Footer /> 
    </div>
  );
}

export default App;
