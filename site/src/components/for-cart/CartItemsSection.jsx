import { useCart } from '../../context';

export const CartItemsSection = ({ cartItems, total, onOrderSubmit }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <section className="cart-items">
      <div className="container">
        <h3>Корзина</h3>
        {cartItems.length === 0 ? (
          <p>Ваша корзина пуста</p>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.cover} alt={item.title} />
                  </div>
                  <div className="item-info">
                    <h4>{item.title} — {item.author}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="item-controls">
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Удалить
                    </button>
                    <div className="quantity-control">
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h4>Итого: ${total.toFixed(2)}</h4>
              <button className="btn btn-primary" onClick={onOrderSubmit}>
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};