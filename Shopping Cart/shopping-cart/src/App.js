// src/App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Fruits', price: 10.0 },
    { id: 2, name: 'Vegetables', price: 20.0 },
    { id: 3, name: 'Groceries', price: 30.0 },
    {id:4,name:'Diary Products',price:25.0}
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
