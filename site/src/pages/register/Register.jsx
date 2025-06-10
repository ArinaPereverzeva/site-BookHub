import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { RegisterHero, RegisterModal } from '../../components/for-register';

const Register = () => {
  // ДОБАВЛЕНО: получаем register из useAuth
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('register');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });

  const openModal = (tab) => {
    setActiveTab(tab);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ЗАМЕНА: новая реализация handleLoginSubmit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // Проверка заполнения полей
    if (!formData.email || !formData.password) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    // Пытаемся войти с email и паролем
    const loginSuccess = login(formData.email, formData.password);
    
    if (loginSuccess) {
      const from = location.state?.from?.pathname || '/account';
      navigate(from, { replace: true });
      closeModal();
    } else {
      alert('Неверный email или пароль');
    }
  };

  // ЗАМЕНА: новая реализация handleRegisterSubmit
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    // Валидация регистрации
    if (formData.password !== formData.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    
    // Проверка обязательных полей
    if (!formData.email || !formData.password) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }

    // Создаем объект пользователя с паролем
    const newUser = {
      email: formData.email,
      password: formData.password, // ДОБАВЛЕНО: сохраняем пароль
      firstName: formData.firstName || 'Новый',
      lastName: formData.lastName || 'Пользователь',
      phone: '',
      birthDate: '',
      city: '',
      genres: ''
    };
    
    // Используем register вместо login для регистрации
    register(newUser);
    const from = location.state?.from?.pathname || '/account';
    navigate(from, { replace: true });
    closeModal();
  };

  return (
    <div className="register-page">
      <Header/>
      <main className="main-content">
        <RegisterHero openModal={openModal}/>
        <RegisterModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          formData={formData}
          handleChange={handleChange}
          handleRegisterSubmit={handleRegisterSubmit}
          handleLoginSubmit={handleLoginSubmit}
        />
      </main>
      <Footer/>
    </div>
  );
};

export default Register;