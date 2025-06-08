export const FiveSection = () => {
    return (
        <section className="reviews-section">
            <div className="container">
                <h3>Отзывы о нашем магазине</h3>
                <div className="reviews-grid">
                    <div className="review-card">
                        <blockquote>"Быстрая доставка и отличный ассортимент."</blockquote>
                        <div className="reviewer">
                            <img src="./src/assets/profile-image.png" alt="Иван" />
                            <div>
                                <p className="reviewer-name">Иван</p>
                                <p className="reviewer-status">Постоянный покупатель в BookHub</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-card">
                        <blockquote>"Цены приятные, сервис на высоте."</blockquote>
                        <div className="reviewer">
                            <img src="./src/assets/profile-image.png" alt="Мария" />
                            <div>
                                <p className="reviewer-name">Мария</p>
                                <p className="reviewer-status">Новый покупатель в BookHub</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-card">
                        <blockquote>"Заказываю книги здесь постоянно — безупречно!"</blockquote>
                        <div className="reviewer">
                            <img src="./src/assets/profile-image.png" alt="Олег" />
                            <div>
                                <p className="reviewer-name">Олег</p>
                                <p className="reviewer-status">Постоянный покупатель в BookHub</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};