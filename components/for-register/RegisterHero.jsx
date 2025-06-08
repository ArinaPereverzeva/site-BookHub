export const RegisterHero = ({ openModal }) => (
    <section className="register-hero">
        <div className="container">
            <div className="hero-columns">
                <div className="hero-image">
                    <img src="./src/assets/registrazia.png" alt="Картинка для регистрации" />
                </div>
                <div className="hero-text">
                    <h2>Зарегистрируйся</h2>
                    <p className="section-description">
                        Открой доступ к персональным подборкам и скидкам!
                    </p>
                    <p>
                        Храните историю заказов и списки желаний в одном аккаунте.
                    </p>
                    <p className="bonus-text">
                        Регистрация = приветственный бонус!
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => openModal('register')}
                    >
                        Регистрация
                    </button>
                </div>
            </div>
        </div>
    </section>
);