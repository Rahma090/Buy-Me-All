import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthorContext/authContext.jsx';
import ECommerceHomePage from './component/ECommerceHomePage/ECommerceHomePage.jsx';
import SignIn from './component/SignIn/SignIn.jsx';
import SignUp from './component/SignUp/SignUp.jsx';
import ProductDetails from './component/ProductDetails/ProductDetails.jsx';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/ECommerceHomePage" element={<ECommerceHomePage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;