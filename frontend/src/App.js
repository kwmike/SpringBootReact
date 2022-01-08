import React, { useState } from 'react';
import './App.css';
import NavBar from './components/nav/NavBar';
import {Routes, Route, Outlet, Navigate} from 'react-router-dom';
import { useLocation } from 'react-router';
import Footer from './components/Footer';
import Members from './pages/Members';
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
          <Route path="" element={<Members/>}/>
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
