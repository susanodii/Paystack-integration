import './App.css';

import {Route, Routes} from "react-router-dom"

import Payment from './PayStack/Payment';
import Products from './Components/Products';
import Customer from './PayStack/Customer';

// import Card from './Components/Card';


// require('dotenv').config()


function App() {
  return (
    <>
    {/* <Card/> */}
    
    <Routes>
     <Route path="/" element={<Products />} />
     <Route path="/payment" element={<Payment />} />
     <Route path="/customer" element={<Customer />} />
    
    </Routes>
    
    
   
    
    
    
    </>
    
  );
}

export default App;
