import React from 'react';

import Navbar from './components/navbar/Navbar'
import Brand from './components/brand/Brand'
import CTA from './components/cta/CTA'

import Header from './container/header/Header'
import WhatGPT3 from './container/whatGPT3/WhatGPT3' 
import Features from './container/features/Features'
import Possibility from './container/possibility/Possibility'
import Blog from './container/blog/Blog'
import Footer from './container/footer/Footer'

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header/>
    </div>
    <div>
      <Brand/>
      <WhatGPT3 />
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>                                                                          
    </div>
    
  </div>
); 


export default App;