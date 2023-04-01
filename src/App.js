import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./router/home/Home";
import Wishlist from "./router/wishlist/Wishlist"
import Cart from "./router/cart/Cart"
import Admin from "./router/admin/Admin"
import Footer from "./components/footer/Footer";
import SingleRoute from "./router/singe-route/SingleRoute";


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/sevimlilar" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:id" element={<SingleRoute/>}/>
      </Routes>
      <Footer/>
     </div>
  );  
}
export default App;