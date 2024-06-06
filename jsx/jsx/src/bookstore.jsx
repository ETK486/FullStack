

import React, { useState } from 'react';


const Book = ({ title, author, price, addToCart }) => {
  return (
    <div className="book">
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Price: Rs.{price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};


const Bookstore = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div className="bookstore">
      <h1>Welcome to Our Bookstore!</h1>
      <div className="books">
        <Book
          title="Half Girlfriend"
          author="Chetan Bhagat"
          price={1000}
          addToCart={() => addToCart("Half Girlfriend")}
        />
        <Book
          title="Harry Potter"
          author="JK Rowling"
          price={3000}
          addToCart={() => addToCart("Harry Potter")}
        />
        <Book
          title="C++ Book"
          author="Balagurusamy"
          price={1200}
          addToCart={() => addToCart("C++ Book")}
        />
        <Book
          title="The Moon Sisters"
          author="Dr.Sridhar"
          price={800}
          addToCart={() => addToCart("The Moon Sisters")}
        />
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ol>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookstore;
