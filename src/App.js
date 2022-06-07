import React, { Suspense } from 'react'
import Home from './components/Layout/Home';
import './App.css';
import Header from './components/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Destination from './components/Layout/Destination';
// import Crew from './components/Layout/Crew';
// import Technology from './components/Layout/Technology';

const Destination = React.lazy(() => import('./components/Layout/Destination'));
const Crew = React.lazy(() => import('./components/Layout/Crew'));
const Technology =React.lazy(() => import('./components/Layout/Technology'));

function App() {
  return (
    <Router>
      <Header/>
      <Suspense fallbac={
        <div className="centered"><p>Loading .... </p></div>
      }>
      <Routes>
        <Route path="/" base element={<Home/>}/>
        <Route path="/destination"  element={<Destination/>}/>
        <Route path="/crew"  element={<Crew/>}/>
        <Route path="/technology"  element={<Technology/>}/>
      </Routes>  
      </Suspense>
    </Router>
  );
}

export default App;
