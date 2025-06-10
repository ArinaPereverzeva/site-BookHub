import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from './src/pages/cart';          // Импорт через папку (использует index.js)
import Register from './src/pages/register';
import Account from './src/pages/account';
import Catalog from './src/pages/catalog';
import HomePage from './src/pages/home';
import './App.css';
import { CartProvider, AuthProvider, useAuth } from './src/context';

// Компонент для защищенных маршрутов
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/register" />;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          {/* Публичные маршруты */}
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />

          {/* Защищенные маршруты */}
          <Route path="/account" element={<ProtectedRoute> <Account /> </ProtectedRoute>} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;