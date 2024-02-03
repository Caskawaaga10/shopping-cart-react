import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Carts  from "./pages/Carts"
import { useState } from "react";

const App = () => {
  const [cart,setCart] = useState(10)
  return (
    <div className="container">
      <Header cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Carts" element={<Carts setCart={setCart} />}/>
      </Routes>
    </div>
  )
}


export default App;