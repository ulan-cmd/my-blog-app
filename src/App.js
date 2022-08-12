import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import Catalog from "./pages/Catalog/Catalog";
import Iphone from "./pages/Iphone/Iphone";
import Watch from "./pages/Watch/Watch";
import Product from "./pages/Product/Product";
import Products from "./pages/Admin/Products/Products";
import IphoneAdmin from "./pages/Admin/IphoneAdmin/IphoneAdmin";
import UpdateProduct from "./pages/Admin/UpdateProduct/UpdateProduct";
import Cart from "./pages/Cart/Cart";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main pageName="Главная страничка"/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/catalog/apple-watch" element={<Watch/>}/>
                <Route path="/catalog/iphone" element={<Iphone/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/admin/add-products" element={<Products/>}/>
                <Route path="/admin/iphone" element={<IphoneAdmin/>}/>
                <Route path="/admin/update-product/:id" element={<UpdateProduct/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Toaster/>
        </BrowserRouter>
    );
}

/*
localhost:3000/catalog - Catalog
localhost:3000/catalog/iphone/ - IphoneAdmin
localhost:3000/catalog/macBook - Watch

localhost:3000/product    -  NotFound
localhost:3000/product/1  -  Products
*/

// HTTP methods: GET, POST, DELETE, PUT
// C -  create - POST
// R - read - GET
// U - update - PUT
// D - delete - DELETE


const data = [
    {
        id:1,
        img:'',
        name:'',
        desc:'',
        price:'',
        category:1
    }
]

export default App;
