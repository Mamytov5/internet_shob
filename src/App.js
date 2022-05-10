import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import {Routes,Route} from "react-router-dom"
import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";
import Contact from "./component/Contact";
import Basket from "./component/Basket";
import Wishlist from "./component/Wishlist";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/Wishlist" element={<Wishlist/>}/>
            </Routes>
        </div>
    );
}

export default App;
