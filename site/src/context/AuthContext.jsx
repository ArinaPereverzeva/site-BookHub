import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // ДОБАВЛЕНО: Состояние для хранения всех зарегистрированных пользователей
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const savedUsers = localStorage.getItem('registeredUsers');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // Изменённый эффект для сохранения обоих состояний
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
    // ДОБАВЛЕНО: Сохранение списка зарегистрированных пользователей
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  }, [user, registeredUsers]); // ДОБАВЛЕНО: registeredUsers в зависимости

  // Синхронизация между вкладками (оставлено без изменений)
  useEffect(() => {
    const handleStorage = () => {
      const userData = localStorage.getItem('user');
      setUser(userData ? JSON.parse(userData) : null);
    };
    
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // ДОБАВЛЕНО: Функция регистрации нового пользователя
  const register = (userData) => {
    setRegisteredUsers(prev => [...prev, userData]);
    setUser(userData);
  };

  // Изменённая функция входа с проверкой пароля
  const login = (email, password) => {
    const foundUser = registeredUsers.find(user => 
      user.email === email && user.password === password
    );
    
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const updateUser = (updatedData) => {
    setRegisteredUsers(prevUsers => 
      prevUsers.map(u => 
        u.email === user.email ? { ...u, ...updatedData } : u
      )
    );
    setUser(prev => ({ ...prev, ...updatedData }));
  };

  const logout = () => {
    setUser(null);
  };

  return (
    // ДОБАВЛЕНО: register в предоставляемое значение контекста
    <AuthContext.Provider value={{ user, register, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Кастомный хук useAuth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};