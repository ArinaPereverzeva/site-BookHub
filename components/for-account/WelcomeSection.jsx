export const WelcomeSection = ({ userData, handleImageUpload }) => {
    return (
        <section className="account-hero">
            <div className="container">
                <div className="hero-columns">
                    <div className="hero-text">
                        <h2>Добро пожаловать домой, {userData.firstName}!</h2>
                        <p className="section-description">
                            Чем больше мы знаем о вас — тем лучше подбираем книги.
                        </p>
                        <ul className="features-list">
                            <li>Заполните профиль – укажите любимые жанры, авторов и предпочтения</li>
                            <li>Добавьте книги в "Хочу прочитать" – получайте персонализированные рекомендации</li>
                            <li>Оцените прочитанное – это поможет точнее подбирать новинки</li>
                            <li>Подпишитесь на рассылку – узнавайте первыми о новинках и акциях</li>
                        </ul>
                    </div>
                    <div className="hero-image">
                        <img
                            src={userData.avatar}
                            alt="Аватар пользователя"
                            className="profile-avatar"
                        />
                        <input
                            type="file"
                            id="avatar-upload"
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="avatar-upload" className="upload-label">
                            Изменить фото
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};