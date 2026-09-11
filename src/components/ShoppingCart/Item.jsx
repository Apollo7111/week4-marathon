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
        {/* total = subtotal × quantity + tax */}
        <h2>Total: €{(item.subtotal * item.quantity + item.tax).toFixed(2)}</h2>
      </div>

      <button onClick={onDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default Item;