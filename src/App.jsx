import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/HomePage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import NotFound from "./pages/NotFound/NotFound";
import ShowProductCategories from "./pages/ShowProductCategories/ShowProductCategories";
import ShowProducts from "./components/ShowProduct/ShowProduct";
import Categorypage from "./pages/Categorypage/Categorypage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/products" element={<ShowProducts />} />
            <Route path="/products/category/All" element={<ShowProducts />} />
            <Route path="/products/category/:category" element={<ShowProductCategories />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products/categories" element={<Categorypage />} />
            <Route path="*" element={<NotFound />} />
           
    </Routes>

    <Footer />
  
    </>
  )
}

export default App;
