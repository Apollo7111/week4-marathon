function Item({ item, onDelete }) {
  return (
    <div className="cart-item">
      <div className="item-info">
        <h3>{item.name}</h3>

        <p>Brand: {item.brand}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Subtotal: €{item.subtotal}</p>
        <p>Tax: €{item.tax}</p>
        <p>Availability: {item.availability}</p>
      </div>

      <button onClick={onDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default Item;