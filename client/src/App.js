import logo from './logo.svg';
import './App.css';
import ECommerceHomePage from './component/ECommerceHomePage/ECommerceHomePage.jsx';
import {BrowserRouter as Router, Route, Switch, BrowserRouter, Routes} from 'react-router-dom'
import SingnIn from './component/SingnIn/SingnIn.jsx';
import SignUp from './component/SingnUp/SignUp.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/ECommerceHomePage' element={ <ECommerceHomePage/>}></Route>
      <Route path='/SingnIn' element={ <SingnIn/>}></Route>
      <Route path='/SingnUp' element={<SignUp/>}></Route>
   

 </Routes>
 </BrowserRouter>
  );
}

export default App;
