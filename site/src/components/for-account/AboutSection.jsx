export const AboutSection = ({ userData, errors, handleChange, handleSubmit }) => {
    return (
        <section className="account-info">
            <div className="container">
                <h3>Обо мне</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Имя</label>
                            <input
                                type="text"
                                name="firstName"
                                value={userData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <span className="error">{errors.firstName}</span>}
                        </div>
                        <div className="form-group">
                            <label>Фамилия</label>
                            <input
                                type="text"
                                name="lastName"
                                value={userData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Почта</label>
                            <input
                                type="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Телефон</label>
                            <input
                                type="tel"
                                name="phone"
                                value={userData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>
                        <div className="form-group">
                            <label>Дата рождения</label>
                            <input
                                type="text"
                                name="birthDate"
                                value={userData.birthDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Город</label>
                            <input
                                type="text"
                                name="city"
                                value={userData.city}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label>Предпочтения к жанрам литературы</label>
                        <textarea
                            name="genres"
                            placeholder="Напиши, какие жанры тебе нравятся больше всего"
                            value={userData.genres}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Сохранить изменения
                    </button>
                </form>
            </div>
        </section>
    );
};