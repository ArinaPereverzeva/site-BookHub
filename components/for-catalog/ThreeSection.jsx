import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

export const ThreeSection = ({ loading, error, filteredBooks }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [messages, setMessages] = useState({});

  const handleAddToCart = (book) => {
    const result = addToCart(book);
    if (!result.success) {
      setMessages(prev => ({ ...prev, [book.id]: result.message }));
      setTimeout(() => {
        setMessages(prev => {
          const newMessages = { ...prev };
          delete newMessages[book.id];
          return newMessages;
        });
      }, 3000);
    }
  };

  return (
    <section className="books-catalog">
      <div className="container">
        {loading ? (
          <div>Загрузка...</div>
        ) : error ? (
          <div>Ошибка: {error}</div>
        ) : filteredBooks.length === 0 ? (
          <div>Книг не найдено</div>
        ) : (
          <div className="books-grid">
            {filteredBooks.map(book => (
              <div key={book.id} className="book-card">
                <img
                  src={book.cover}
                  alt={book.title}
                  onError={(e) => e.target.src = './src/assets/default-book-cover.png'}
                />
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <div className="book-card-actions">
                  <button 
                    onClick={() => handleAddToCart(book)}
                    className="add-to-cart"
                  >
                    Добавить в корзину
                  </button>
                  {messages[book.id] && (
                    <div className="auth-message">{messages[book.id]}</div>
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
        )}
      </div>
    </section>
  );
};