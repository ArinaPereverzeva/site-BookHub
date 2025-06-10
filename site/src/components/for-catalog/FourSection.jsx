export const FourSection = ({ noveltiesRef }) => {
    return (
        <section className="novelties-section" ref={noveltiesRef}>
            <div className="container">
                <h3>Новинки в BookHub</h3>
                <div className="novelties-grid">
                    <div className="novelty-column">
                        <img src="./src/assets/russclass.png" alt="Русская классика" />
                        <h4>Русская классика</h4>
                        <ul>
                            <li>"Мастер и Маргарита" — Михаил Булгаков</li>
                            <li>"Евгений Онегин" — Александр Пушкин</li>
                            <li>"Отцы и дети" — Иван Тургенев</li>
                        </ul>
                    </div>
                    <div className="novelty-column">
                        <img src="./src/assets/zarubegclass.png" alt="Зарубежная классика" />
                        <h4>Зарубежная классика</h4>
                        <ul>
                            <li>"1984" — Джордж Оруэлл</li>
                            <li>"Убить пересмешника" — Харпер Ли</li>
                            <li>"Гордость и предубеждение" — Джейн Остин</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};