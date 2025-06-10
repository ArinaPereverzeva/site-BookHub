export const RegisterModal = ({
  isModalOpen,
  closeModal,
  activeTab,
  setActiveTab,
  formData,
  handleChange,
  handleRegisterSubmit, // новый пропс для регистрации
  handleLoginSubmit    // новый пропс для входа
}) => {
  return (
    <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`}>
      <div className="modal-content">
        <button className="close-modal" onClick={closeModal}>
          &times;
        </button>
        
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Вход
          </button>
          <button 
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Регистрация
          </button>
        </div>

        {activeTab === 'register' ? (
          <form className="register-form" onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">Имя</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Ваше имя"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Фамилия</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Ваша фамилия"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Почта</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Подтверждение пароля</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Зарегистрироваться
            </button>
            <div className="social-auth">
              <p>Авторизация через социальные сети</p>
              <div className="social-icons">
                <button type="button" className="social-btn google">G</button>
                <button type="button" className="social-btn facebook">F</button>
                <button type="button" className="social-btn vk">VK</button>
              </div>
            </div>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="loginEmail">Почта</label>
              <input
                type="email"
                id="loginEmail"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Пароль</label>
              <input
                type="password"
                id="loginPassword"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Войти
            </button>
            <div className="social-auth">
              <p>Авторизация через социальные сети</p>
              <div className="social-icons">
                <button type="button" className="social-btn google">G</button>
                <button type="button" className="social-btn facebook">F</button>
                <button type="button" className="social-btn vk">VK</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};