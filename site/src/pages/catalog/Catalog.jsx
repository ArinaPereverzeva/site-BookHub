import { useState, useRef, useEffect } from 'react';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { OneSection, TwoSection, ThreeSection, FourSection, FiveSection, SixSection } from '../../components/for-catalog';

const Catalog = () => {
    // Ссылки для прокрутки к разделам
    const noveltiesRef = useRef(null);
    const filtersRef = useRef(null);

    // Состояния для данных и фильтрации
    const [allBooks, setAllBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [apiSearchQuery, setApiSearchQuery] = useState('intitle:классика'); // Начальный запрос

    // Загрузка данных из Google Books API
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(apiSearchQuery)}&maxResults=20&printType=books&langRestrict=ru`
                );
                
                if (!response.ok) {
                    throw new Error('Ошибка загрузки данных');
                }
                
                const data = await response.json();
                
                if (data.items) {
                    const formattedBooks = data.items.map((item, index) => {
                        const volumeInfo = item.volumeInfo;
                        return {
                            id: item.id || index,
                            title: volumeInfo.title || 'Название не указано',
                            author: volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Автор неизвестен',
                            price: Math.random() * 20 + 10, // Генерируем случайную цену, так как в API ее нет
                            description: volumeInfo.description || 'Описание отсутствует',
                            isNew: Math.random() > 0.5, // Случайное значение для новинки
                            cover: volumeInfo.imageLinks?.thumbnail || './src/assets/default-book-cover.png'
                        };
                    });
                    
                    setAllBooks(formattedBooks);
                    setFilteredBooks(formattedBooks);
                } else {
                    setAllBooks([]);
                    setFilteredBooks([]);
                }
            } catch (err) {
                setError(err.message);
                console.error('Ошибка при загрузке книг:', err);
            } finally {
                setLoading(false);
            }
        };
        
        fetchBooks();
    }, [apiSearchQuery]);

    // Обработчик поиска
    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setFilteredBooks(allBooks);
        } else {
            const filtered = allBooks.filter(book =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredBooks(filtered);
        }
    };

    // Поиск в Google Books API
    const handleApiSearch = () => {
        if (searchTerm.trim() !== '') {
            setApiSearchQuery(searchTerm);
        }
    };

    // Сброс фильтров
    const resetFilters = () => {
        setSearchTerm('');
        setFilteredBooks(allBooks);
    };

    // Прокрутка к разделу "Новинки"
    const scrollToNovelties = () => {
        if (noveltiesRef.current) {
            noveltiesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="catalog-page">
            {/* Шапка */}
            <Header/>
            
            {/* Основное содержимое */}
            <main className="main-content">
                {/* Первый раздел: Приветствие */}
                <OneSection scrollToNovelties={scrollToNovelties}/>

                {/* Второй раздел: Фильтры */}
                <TwoSection
                filtersRef={filtersRef}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
                handleApiSearch={handleApiSearch}
                resetFilters={resetFilters}/>

                {/* Третий раздел: Каталог книг */}
                <ThreeSection
                loading={loading}
                error={error}
                filteredBooks={filteredBooks}/>
                
                {/* Четвертый раздел: Новинки */}
                <FourSection noveltiesRef={noveltiesRef}/>
                
                {/* Пятый раздел: Отзывы */}
                <FiveSection/>                              
                
                {/* Шестой раздел: Логотип и кнопки */}
                <SixSection/>                               
            
            </main>
            
            {/* Подвал */}
            <Footer/>        
        </div>
    );
}

export default Catalog;