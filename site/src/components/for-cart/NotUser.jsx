export const NotUser = () => (
    <section className="cart-items">
        <div className="container">
            <h3>Корзина</h3>
            <div className="auth-required-message">
                <p>Для просмотра корзины необходимо войти в систему</p>
                <div className="auth-links">
                    <a href="/register" className="btn">Зарегистрироваться/Войти</a>
                </div>
            </div>
        </div>
    </section>
);