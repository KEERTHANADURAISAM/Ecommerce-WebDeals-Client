import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from "./Components/Product/ProductDetail";
import './App.css'
import ProductSearch from "./Components/Product/ProductSearch";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HelmetProvider>
          <Header />
          <div className="container container-fluid">
          <ToastContainer theme='dark'/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search/:keyword" element={<ProductSearch/>} />
            <Route path="/product/:id" element={<ProductDetail/>} />
          </Routes>
          </div>
          <Footer />
        </HelmetProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
