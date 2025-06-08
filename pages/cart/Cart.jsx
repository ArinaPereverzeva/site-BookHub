import { Footer } from '../../components/footer';
import { CartHero, CartItemsSection, NotUser, OrderModal } from '../../components/for-cart';
import { Header } from '../../components/header';
import { useAuth, useCart } from '../../context';
import { useState } from 'react';

const Cart = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  const [showOrderModal, setShowOrderModal] = useState(false);
  
  // Для неавторизированных пользователей
  if (!user) {
    return (
      <div className="cart-page">
        <Header/>
        <main className="main-content">
          <NotUser/>
        </main>
        <Footer/>
      </div>
    );
  }

  // Подсчет общей суммы
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleOrderSubmit = () => {
    setShowOrderModal(true);
  };

  const closeOrderModal = () => {
    setShowOrderModal(false);
    clearCart(); // Очищаем корзину после закрытия модального окна
  };
  
  // Для авторизированных пользователей
  return (
    <div className="cart-page">
      {/* Шапка (такая же как на главной) */}
      <Header/>
      
      {/* Основное содержимое */}
      <main className="main-content">

        {/* Первая секция с заголовком и картинкой */}
        <CartHero/>
        
        {/* Секция с товарами в корзине */}
        <CartItemsSection
          cartItems={cartItems} 
          total={total} 
          onOrderSubmit={handleOrderSubmit} 
        />
      </main>

      {/* Модальное окно подтверждения заказа */}
      {showOrderModal && (
        <OrderModal 
          cartItems={cartItems} 
          total={total} 
          closeOrderModal={closeOrderModal}
        />
      )}

      <Footer/>
    </div>
  );
};

export default Cart;