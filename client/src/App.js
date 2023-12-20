import './App.css';
import ECommerceHomePage from './component/ECommerceHomePage/ECommerceHomePage.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SingnIn from './component/SingnIn/SingnIn.jsx';
import SignUp from './component/SingnUp/SignUp.jsx';
import ProductDetails from './component/ProductDetails/ProductDetails.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/ECommerceHomePage' element={ <ECommerceHomePage/>}></Route>
      <Route path='/SingnIn' element={ <SingnIn/>}></Route>
      <Route path='/SingnUp' element={<SignUp/>}></Route>
      <Route path='/ProductDetails' element={<ProductDetails/>} ></Route>
   

 </Routes>
 </BrowserRouter>
  );
}

export default App;
