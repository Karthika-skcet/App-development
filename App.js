
import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,Router} from "react-router-dom";
import PatientLogin from './PatientLogin';
import Login from './Login';
import Navbar from './Components/Navbar';
import Home from './Home';
import Product from './Product';
import Services from './Services';
import Contact from './Contact';
import LandingPage from './LandingPage';
import CustHome from './HomePage/Home';
import Stocks from './HomePage/Stocks';
import Posts from './HomePage/Posts';
import Me from './HomePage/Me';
import FirstPage from './HomePage/FirstPage';
import CreateList from './ListSearch/CreateList';
import Diagnosis from './ListSearch/Diagnosis';
import Header from "./Page/Header";
import Main from "./Page/Main";
import LastPage from "./Page/LastPage";
import Footer from "./Page/Footer";
import CusHome from "./Page/CusHome";
import Discover from "./ListSearch/Discover";
import Phome from "./Pharma/Phome";
import StockPage from "./Pharma/StockPage";
import OrderPage from "./Pharma/OrderPage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/home" element={<Home />} />
    <Route path="/userlogin" element={<Navbar />} />
    <Route path="/signup" element={<Login/>}/>
    <Route path="/login" element={<PatientLogin/>}/>
    <Route path="/customer" element={<Product/>}/>
    <Route path="/customerhome" element={<CustHome/>}/>
    <Route path="/list" element={<CreateList/>}/>
    <Route path="/cus-rhome" element={<FirstPage/>}/>
    <Route path="/diagnosis" element={<Diagnosis/>}/>
    <Route path='/pharmahome' element={<Phome/>}/>
    <Route path='/discover' element={<Discover/>}/>
    <Route path='/post' element={<Posts/>}/>
    <Route path='/stocks' element={<StockPage/>}/>
    <Route path='/orders' element={<OrderPage/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
