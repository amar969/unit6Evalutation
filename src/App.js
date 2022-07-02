import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import {Login} from "./Components/Public/Login";
import {Home} from "./Components/Private/Home";
import {Booking} from "./Components/Private/Booking";
import {MovieDetails} from "./Components/Private/MovieDetails"

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/Booking" element={<Booking />}> </Route>
        <Route path="/MovieDetails/:id" element={<MovieDetails />}> </Route> 
      </Routes>
    </div>
  );
}

export default App;
