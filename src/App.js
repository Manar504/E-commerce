
import './App.css'; 

import Navbar from "./components/Navbar";
import {Routes ,Route} from "react-router-dom"

import Details from "./pages/Detiles/Details"

import Not_Found from './pages/Not_Found/Not_Found';
import Products from './pages/Products/Products'; 
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home'; 
import MyFooter from "../src/components/Footer"
import { useDispatch } from 'react-redux';
import { fetchProduct } from './store/ProductSlice';
import { useEffect } from 'react'; 
import ContactUs from "../src/pages/Contactus/ContactUs";
import Register from "../src/pages/Register/Register";
import Login from "../src/pages/Login/Login"







function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [])
  
  
  return (
    <div> 
      <Navbar/> 
      <Routes> 
      <Route path='/' element={<Home/>}/> 
      <Route path='Home' element={<Home/>}/>
        <Route path='Products' element={<Products/>}/> 
        <Route path='ContactUs'element={<ContactUs/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='/Details/:id' element={<Details/>}/> 
        <Route path='Register' element={<Register/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='*' element={<Not_Found/>}/>
      </Routes> 
      <MyFooter></MyFooter>
     
    </div>
  );
}

export default App;
