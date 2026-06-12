import { useState } from 'react'
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import MyPlants from './pages/MyPlants';
import AddPlant from './pages/AddPlant';
import PlantDetail from './pages/PlantDetail';
import CareGuide from './pages/CareGuide';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import { Features } from 'tailwindcss';
import Details from './pages/Details';
import Calendar from './pages/Calendar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-plants" element={<MyPlants />} />
        <Route path="/add-plant" element={<AddPlant />} />
        <Route path="/my-plants/add" element={<AddPlant />} />
        <Route path="/my-plants/:id" element={<Details />} />
        <Route path="/my-plants" element={<MyPlants />} />
        <Route path="/care-guide" element={<CareGuide />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </>
  )
}

export default App
