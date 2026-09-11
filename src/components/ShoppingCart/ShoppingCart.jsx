import { useState } from "react";
import "./ShoppingCart.css";
import Item from "./Item";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [tax, setTax] = useState("");
  const [availability, setAvailability] = useState("In stock");

  function addItem() {
    if (
      name.trim() !== "" && brand.trim() !== "" && quantity !== "" && subtotal !== "" && tax !== ""
    ) {
      const newItem = {
        id: Date.now(),
        name,
        brand,
        quantity: Number(quantity),
        subtotal: Number(subtotal),
        tax: Number(tax),
        availability,
      };

      setCartItems((items) => [...items, newItem]);

      setName("");
      setBrand("");
      setQuantity("");
      setSubtotal("");
      setTax("");
      setAvailability("In stock");
    }
  }

  function deleteItem(id) {
    const updatedCart = cartItems.filter((i) => i.id !== id);
    setCartItems(updatedCart);
    // setCartItems((items) => items.filter((_, i) => i.id !== id));
  }

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter product name..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Enter brand..."
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity..."
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />

        <input
          type="number"
          placeholder="Subtotal..."
          value={subtotal}
          onChange={(event) => setSubtotal(event.target.value)}
        />

        <input
          type="number"
          placeholder="Tax..."
          value={tax}
          onChange={(event) => setTax(event.target.value)}
        />

        <select
          value={availability}
          onChange={(event) => setAvailability(event.target.value)}
        >
          <option value="In stock">In stock</option>
          <option value="Out of stock">Out of stock</option>
        </select>

        <button onClick={addItem}>
          Add to Cart
        </button>
      </div>

      <div className="cart-section">
        <h2>Your Cart ({cartItems.length})</h2>

        {cartItems.length === 0 ? (
          <p className="empty-message">
            Your cart is empty. Add an item to get started!
          </p>
        ) : (
          <div className="cart-list">
            {cartItems.map((item) => (
              <Item
                key={item.id}
                item={item}
                onDelete={() => deleteItem(item.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;