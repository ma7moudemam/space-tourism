import Home from './components/Layout/Home';
import './App.css';
import Header from './components/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from './components/Layout/Destination';
import Crew from './components/Layout/Crew';
import Technology from './components/Layout/Technology';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/home"  element={<Home/>}/>
        <Route path="/destination"  element={<Destination/>}/>
        <Route path="/crew"  element={<Crew/>}/>
        <Route path="/technology"  element={<Technology/>}/>
      </Routes>  
    </Router>
  );
}

export default App;
