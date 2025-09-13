import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './Landing_page/home/HomePage';
import Signup from "./Landing_page/signup/SignUp";
import AboutPage from "./Landing_page/about/AboutPage";
import Productspage from "./Landing_page/products/ProductsPage";
import PricingPage from "./Landing_page/pricing/PricingPage";
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';
import SupportPage from "./Landing_page/support/SupportPage";
import Verify from "./Landing_page/Verify";
import Login from './Landing_page/login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/product" element={<Productspage/>}></Route>
    <Route path="/pricing" element={<PricingPage/>}></Route>
    <Route path="/support" element={<SupportPage/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/verify" element={<Verify />} />
    <Route path="*" element={<NotFound/>}></Route>

    
  </Routes>
  <Footer/>
  </BrowserRouter>
);

