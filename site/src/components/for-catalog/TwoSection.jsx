export const TwoSection = ({ 
    filtersRef, 
    searchTerm, 
    setSearchTerm, 
    handleSearch, 
    handleApiSearch, 
    resetFilters 
}) => {
    return (
        <section className="filters-section" ref={filtersRef}>
            <div className="container">
                <h3>Воспользуйся фильтрами, если ищешь что-то конкретное...</h3>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Поиск по названию или автору"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <button className="btn btn-primary" onClick={handleApiSearch}>
                        Поиск
                    </button>
                    <button className="btn btn-secondary" onClick={resetFilters}>
                        Сбросить фильтры
                    </button>
                </div>
            </div>
        </section>
    );
};