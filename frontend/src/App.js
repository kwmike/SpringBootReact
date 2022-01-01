import React, { useState } from 'react';
import {useEffect} from 'react';
import './App.css';
import NavBar from './components/nav/NavBar';
import {Routes, Route, Outlet, Navigate} from 'react-router-dom';
import { useLocation } from 'react-router';
import Footer from './components/Footer';
import ListMembers from './components/ListMembers';
import Home from './pages/Home';
const Format = () => {
  return(
    <>
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><NavBar />{Format()}</>}>
          <Route path="" element={<Placeholder name="Home"/>} />
        </Route>
        <Route path='/members' element={<><NavBar />{Format()}</>}>
          <Route path="" element={<Home/>}/>
          <Route path="add" element={<Placeholder name="Add"/>}/>
        </Route>
      </Routes>
    </div>
  );
}

const Placeholder = ({name}) => {
  const location = useLocation();
  return (
    <div>
      <p>Name: {name}</p>
      <p>Location: {location.pathname}</p>
      <Outlet />
    </div>
  )
}
export default App;
