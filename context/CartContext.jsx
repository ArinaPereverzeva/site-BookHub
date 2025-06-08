import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Хранилище всех корзин пользователей
  const [userCarts, setUserCarts] = useState(() => {
    const savedCarts = localStorage.getItem('userCarts');
    return savedCarts ? JSON.parse(savedCarts) : {};
  });

  // Получаем текущего пользователя
  const { user } = useAuth();

  // Текущая корзина активного пользователя
  const [currentCart, setCurrentCart] = useState([]);

  // Обновляем текущую корзину при изменении пользователя или userCarts
  useEffect(() => {
    if (user) {
      setCurrentCart(userCarts[user.email] || []);
    } else {
      setCurrentCart([]);
    }
  }, [user, userCarts]);

  // Сохраняем корзины в localStorage
  useEffect(() => {
    localStorage.setItem('userCarts', JSON.stringify(userCarts));
  }, [userCarts]);

  // Добавление товара в корзину
  const addToCart = (book) => {
    if (!user) {
      return { 
        success: false, 
        message: 'Для добавления в корзину войдите в систему' 
      };
    }
    
    setUserCarts(prev => {
      const userCart = prev[user.email] || [];
      const existingItem = userCart.find(item => item.id === book.id);
      
      const updatedCart = existingItem
        ? userCart.map(item =>
            item.id === book.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...userCart, { ...book, quantity: 1 }];
      
      return {
        ...prev,
        [user.email]: updatedCart
      };
    });

    return { success: true };
  };

  // Удаление товара из корзины
  const removeFromCart = (id) => {
    if (!user) return;
    
    setUserCarts(prev => ({
      ...prev,
      [user.email]: (prev[user.email] || []).filter(item => item.id !== id)
    }));
  };

  // Обновление количества товара
  const updateQuantity = (id, newQuantity) => {
    if (!user) return;
    
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }

    setUserCarts(prev => ({
      ...prev,
      [user.email]: (prev[user.email] || []).map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    }));
  };

  // Очистка корзины текущего пользователя
  const clearCart = () => {
    if (!user) return;
    
    setUserCarts(prev => ({
      ...prev,
      [user.email]: []
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: currentCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart // Добавляем новую функцию
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};