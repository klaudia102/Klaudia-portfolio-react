import { useState } from 'react'

// import './App.css'
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import ProjectGallery from './pages/ProjectGallery/ProjectGallery'
import Header from './components/header/Header'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
   <Router>
    <Header />
    <Routes>
      < Route path="/" index element={<Home />} />
      < Route path="/contact" element={<Contact />} />
      < Route path="/gallery" element={<ProjectGallery />} />
    </Routes>
   </Router>
   <Footer />
   </>
  )
  }
export default App
