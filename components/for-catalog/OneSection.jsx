export const OneSection = ({ scrollToNovelties }) => {
    return (
        <section className="catalog-hero">
            <div className="hero-overlay"></div>
            <div className="container">
                <h2>Книги, которые покорили мир — теперь могут покорить и вас.</h2>
                <p className="hero-text">
                    Начните читать то, что уже изменило жизни тысяч людей
                </p>
                <button
                    className="btn btn-secondary"
                    onClick={scrollToNovelties}
                >
                    Новинки
                </button>
            </div>
        </section>
    );
};