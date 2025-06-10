import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { AboutSection, WelcomeSection } from '../../components/for-account';

const Account = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  
  // Состояние для данных пользователя
  const [userData, setUserData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    birthDate: user?.birthDate || '',
    city: user?.city || '',
    genres: user?.genres || '',
    avatar: user?.avatar || './src/assets/profile-image.png'
  });

  // Состояние для ошибок валидации
  const [errors, setErrors] = useState({});

  // Обновление данных при изменении пользователя
  useEffect(() => {
    if (user) {
      setUserData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
        birthDate: user.birthDate || '',
        city: user.city || '',
        genres: user.genres || '',
        avatar: user.avatar || './src/assets/profile-image.png'
      });
    }
  }, [user]);

  // Валидация формы
  const validate = () => {
    const newErrors = {};
    if (!userData.firstName.trim()) newErrors.firstName = 'Введите имя';
    if (!userData.email.includes('@')) newErrors.email = 'Некорректный email';
    if (!userData.phone) newErrors.phone = 'Введите телефон';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Загрузка аватара
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserData(prev => ({
          ...prev,
          avatar: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      updateUser(userData);
      alert('Изменения сохранены!');
    }
  };

  if (!user) {
    navigate('/register');
    return null;
  }

  return (
    <div className="account-page">
      <Header/>
      <main className="main-content">
        <WelcomeSection
          userData={userData} 
          handleImageUpload={handleImageUpload}
        />

        <AboutSection
          userData={userData} 
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </main>
      <Footer/>
    </div>
  );
};

export default Account;