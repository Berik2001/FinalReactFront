import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About.js';
import Guarantee from './pages/Guarantee.js';
import Contacts from './pages/Contacts.js';
import Delivery from './pages/Delivery.js';
import Review from './pages/Review.js';
import Condition from './pages/Condition.js';
import Home from './pages/Home.js';
import ProductPage from './pages/ProductPage.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import SpecificProduct from './components/ProductPage/SpecificProduct';
import FormProduct from './pages/FormProduct.js';
import AdminHome from './pages/AdminTable';
import Booking from './pages/Booking';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductTable from './components/AdminPage/ProductTable';
import CategoryTable from './components/AdminPage/CategoryTable';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/products/:id" element={<ProductPage />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form-product" element={<FormProduct />} />
          <Route exact path="/berik" element={<SpecificProduct />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/condition" element={<Condition />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/guarantee" element={<Guarantee />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/review" element={<Review />} />
          <Route path="/admin/forms" element={<AdminHome />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/admin/products" element={<ProductTable />} />
          <Route path="/admin/category" element={<CategoryTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
