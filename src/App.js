import logo from './logo.svg';
import './App.scss';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProfilePicture from './pages/ProfilePicture';
import Otp from './pages/Otp';
import ProductDetailspage from './pages/ProductDetailspage';
import Wishlist from './components/Wishlist';
import Cart from './pages/Cart';
import ModetryCheckOut from './pages/ModetryCheckOut';
import Account from './pages/Account';
import Contact from './pages/Contact';
import Cloths from './pages/Cloths';

function App() {
  return (
    <Routes>
      <Route path="/"  element={<Homepage/>}></Route>
      <Route path="/cloths"  element={<Cloths/>}></Route>
      <Route path="/signUp"  element={<SignUp/>}></Route>
      <Route path="/login"  element={<Login/>}></Route>
      <Route path="/otp"  element={<Otp/>}></Route>
      <Route path="/profilePicture"  element={<ProfilePicture/>}></Route>
      <Route path="/productDetailspage"  element={<ProductDetailspage/>}></Route>
      <Route path="/wishlist" element={<Wishlist/>}></Route>
      <Route path="/cart"  element={<Cart/>}></Route>
      <Route path="/modetryCheckOut"  element={<ModetryCheckOut/>}></Route>
      <Route path="/account"  element={<Account/>}></Route>
      <Route path="/contact"  element={<Contact/>}></Route>
    </Routes>
   
  );
}

export default App;
