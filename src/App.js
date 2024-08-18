import React, { useState } from 'react';
import '../src/components/Sidebar.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Order from './pages/Order';
import Product from './pages/Product';
import History from './pages/History';
import Message from './pages/Message';
import Login from './pages/Login';

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <BrowserRouter>
      {/* Sidebar akan digunakan untuk semua route kecuali login */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Sidebar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product" element={<Product products={products} setProducts={setProducts} />} />
          <Route path="/history" element={<History />} />
          <Route path="/message" element={<Message />} />
        </Route>
        {/* Route untuk halaman login terpisah */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
