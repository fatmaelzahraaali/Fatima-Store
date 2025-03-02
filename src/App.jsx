import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import './App.css';
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Navbar onCategorySelect={setSelectedCategory} />
      <h2 className='storeOwner'>Fatima Store</h2>
      <Routes>
        <Route path="/" element={<ProductList selectedCategory={selectedCategory} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;