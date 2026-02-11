import React, { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", quantity: 1 },
    { id: 2, name: "Product 2", quantity: 1 },
    
  ]);

  //(Add)
  function addItem() {
    const newItem = { id: Date.now(), name: "Product " + (cart.length + 1), quantity: 1 };
    setCart((old)=>[...old,newItem])
  }

  // (Update)
function increaseQty(id) {
  setCart((prevCart) => {
    return prevCart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  });
}

  // (Delete)
  function removeItem(id) {
    let result = cart.filter((item)=>item.id!==id)
    console.log(result)
    setCart(result)
    
  }

  return (
    <div className="container">
      <h1>Shopping Cart 🛒</h1>
      
      <button className="add-btn" onClick={addItem}>
        Add New Product
      </button>

      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="item">
            <div className="item-info">
              <strong>{item.name}</strong>
              <span>Quantity: {item.quantity}</span>
            </div>
            
            <div className="controls">
              <button className="plus-btn" onClick={() => increaseQty(item.id)}>
                +
              </button>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {cart.length === 0 && <p style={{textAlign: "center", color: "#bdc3c7"}}>Your cart is empty.</p>}
    </div>
  );
}

export default App;