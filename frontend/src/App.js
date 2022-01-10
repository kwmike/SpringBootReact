import React from 'react';
import './App.css';
import NavBar from './components/nav/NavBar';
import {Routes, Route, Outlet } from 'react-router-dom';
import { useLocation, useParams } from 'react-router';
import Footer from './components/Footer';
import Members from './pages/public/members/Members';
import Ships from './pages/Ships';
import MemberInfo from './pages/public/members/MemberInfo';
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
          <Route path="about" element={<Placeholder name="About"/>} />
          <Route path="*" element={<PathNotFound />} />
        </Route>
        <Route path='/members' element={<><NavBar />{Format()}</>}>{/* PUBLIC - VIEW ONLY */}
          <Route path="" element={<Members/>}/>
          <Route path="add" element={<Placeholder name="Add"/>}/>
          <Route path=":id" element={<Outlet/>} >
            <Route path="" element={<MemberInfo />}/>
            <Route path="ships" element={<PlaceholderWithID name="Member Ships"/>}/>
            <Route path="org" element={<PlaceholderWithID name="Member Organization"/>}/>
            <Route path="discord" element={<PlaceholderWithID name="Member Discord"/>}/>
          </Route>
        </Route>
        <Route path='/ships' element={<><NavBar />{Format()}</>}>{/* PUBLIC - VIEW ONLY */}
          <Route path="" element={<Ships />} />{/* Lists from public API */}
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

const PlaceholderWithID = ({name}) => {
  const {id} = useParams();
  const location = useLocation();
  return (
    <div>
      <p>Name: {name}</p>
      <p>Params: {id}</p>
      <p>Location: {location.pathname}</p>
    </div>
  )
}

const PathNotFound = () => {
  return (
    <div>
      <h1>PATH NOT FOUND</h1>
    </div>
  )
}


export default App;
