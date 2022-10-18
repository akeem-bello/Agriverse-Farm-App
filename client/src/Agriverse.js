import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AdminOrders from './pages/AdminOrders';
import AdminProduce from './pages/AdminProduce';
import AdminSignIn from './pages/AdminSignIn';
import Contact from './pages/Contact';
import ExporterDashboard from './pages/ExporterDashboard';
import ExporterSignIn from './pages/ExporterSignIn';
import ExporterSignUp from './pages/ExporterSignUp';
import FarmerDashboard from './pages/FarmerDashboard';
import FarmerSignIn from './pages/FarmerSignIn';
import FarmerSignUp from './pages/FarmerSignUp';
import Home from './pages/Home';
import Inquiries from './pages/Inquiries';
import PageNotFound from './pages/PageNotFound';

function Agriverse() {
  const token = localStorage.token;
  const token2 = localStorage.token2;
  return (
    <div style={{backgroundColor:'#69BD86'}}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/farmer/signup' element={<FarmerSignUp />}/>
        <Route path='/farmer/signin' element={<FarmerSignIn />}/>
        <Route path='/farmer/dashboard' element={token ? <FarmerDashboard /> : <Navigate to='/farmer/signin'/>}/>
        <Route path='/exporter/signup' element={<ExporterSignUp />}/>
        <Route path='/exporter/signin' element={<ExporterSignIn />}/>
        <Route path='/exporter/dashboard' element={token2 ? <ExporterDashboard /> : <Navigate to='/exporter/signin'/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/admin' element={<AdminSignIn />}/>
        <Route path='/admin/produce' element={<AdminProduce />}/>
        <Route path='/admin/orders' element={<AdminOrders />}/>
        <Route path='/admin/messages' element={<Inquiries />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default Agriverse;
