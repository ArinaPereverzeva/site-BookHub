import { NavLink } from "react-router-dom";
import { useCart, useAuth } from "../../context"; // Импортируем оба хука

export const Header = () => {
  const { cartItems } = useCart(); // Получаем данные корзины
  const { user, logout } = useAuth(); // Получаем данные авторизации
  
  // Считаем общее количество товаров
  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">BookHub</h1>
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            Главная
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Каталог
          </NavLink>

          {/* Условный рендеринг для авторизованных/неавторизованных пользователей */}
          {user ? (
            <>
              <NavLink
                to="/account"
                className={({ isActive }) => 
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Личный кабинет
              </NavLink>
              <button 
                onClick={logout}
                className="nav-link logout-btn"
              >
                Выйти
              </button>
            </>
          ) : (
            <NavLink
              to="/register"
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Вход/Регистрация
            </NavLink>
          )}

          <NavLink
            to="/cart"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Корзина
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};