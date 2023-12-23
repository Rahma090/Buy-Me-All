import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthorContext/authContext.jsx';
import ECommerceHomePage from './component/ECommerceHomePage/ECommerceHomePage.jsx';
import SignIn from './component/SignIn/SignIn.jsx';
import SignUp from './component/SignUp/SignUp.jsx';
import ProductDetails from './component/ProductDetails/ProductDetails.jsx';
import Admin from './component/Admin/Admin.jsx';
import Seller from './component/Seller/Seller.jsx';
import Profile from './component/Profile/profile.jsx';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <ECommerceHomePage/>}></Route>  
      <Route path='/SignIn' element={ <SignIn/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
      <Route path='/admin/:id' element={<Admin/>}></Route>
      <Route path='/Seller' element={ <Seller/>}></Route>
      <Route path='/Profile' element={ <Profile/>}></Route>
      <Route path='/Product/:id' element={<ProductDetails/>} ></Route>


 </Routes>
 </BrowserRouter>

  );
}

export default App;