import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

export const TopBooksSection = ({ books }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [message, setMessage] = useState(null);

  const handleAddToCart = (book) => {
    const result = addToCart(book);
    if (!result.success) {
      setMessage(result.message);
      setTimeout(() => setMessage(null), 3000); // Скрыть сообщение через 3 секунды
    }
  };

  return (
    <section className="top-books">
      <div className="container">
        <div className="section-header">
          <h3>Топ 3 книги этого месяца</h3>
        </div>
        <div className="books-grid">
          {books.map(book => (
            <div key={book.id} className="book-card">
              <div className="book-cover">
                <img src={book.cover} alt={book.title} />
              </div>
              <h4>{book.title}</h4>
              <p className="author">{book.author}</p>
              <p className="price">{book.price} ₽</p>
              
              <div className="book-card-actions">
                <button 
                  onClick={() => handleAddToCart(book)} 
                  className="add-to-cart"
                >
                  В корзину
                </button>
                
                {message && (
                  <div className="auth-message">{message}</div>
                )}
                
                {!user && (
                  <div className="auth-hint">
                    <a href="/register">Зарегистрируйтесь/Войдите</a>, чтобы сохранить корзину
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};