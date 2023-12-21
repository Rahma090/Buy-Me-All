import './App.css';
import ECommerceHomePage from './component/ECommerceHomePage/ECommerceHomePage.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignIn from './component/SignIn/SignIn.jsx';
import SignUp from './component/SignUp/SignUp.jsx';
import ProductDetails from './component/ProductDetails/ProductDetails.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/ECommerceHomePage' element={ <ECommerceHomePage/>}></Route>
      <Route path='/SignIn' element={ <SignIn/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
      <Route path='/ProductDetails' element={<ProductDetails/>} ></Route>
   

 </Routes>
 </BrowserRouter>
  );
}

export default App;
