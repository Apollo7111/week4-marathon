import { useState } from "react";
function ShoppingCart() {
// Name: Wireless Mouse
// Brand: ExampleBrand
// Quantity: 2
// Subtotal: €40
// Tax: €9.60
// Availability: In stock
const [items, addItems] = useState("")
const [newItem, addNewItem] = useState({itemName: "", quantity: ""})

function handleInputChange(event) {
  addNewItem((e) => ({...e, [event.target.name]: event.target.value}));
}

function addItem() {
  addItems(i => [...i, newItem]);
  addNewItem({itemName: "", quantity: ""})

}

function onDelete(index){
  const updatedItems = items.filter((_, i) => i !== index);
  setItems(updatedItems)
}
  return (
    <div>
      ShoppingCart

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter item name..."
          value={newItem.name}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Enter item quantity..."
          value={newItem.quantity}
          onChange={handleInputChange}
          className="input-field"
        />
        <button onClick={addItem} className="add-button">
          Add Item
        </button>
      </div>
      {/* <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item.itemName} - {item.quantity}
            <button onClick ={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ol> */}

    </div>
  )
}
 
export default ShoppingCart

