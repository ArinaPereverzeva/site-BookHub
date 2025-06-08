import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { HeroSection } from '../../components/for-home/HeroSection';
import { NewBooksSection } from '../../components/for-home/NewBooksSection';
import { InspirationSection } from '../../components/for-home/InspirationSection';
import { TopBooksSection } from '../../components/for-home/TopBooksSection';
import { WhyBooksSection } from '../../components/for-home/WhyBooksSection';

// Импортируем изображения для книг
import masterandmargarita from '../../assets/masterandmargarita.png';
import warandpeace from '../../assets/warandpeace.png';
import quietdon from '../../assets/quietdon.png';

const HomePage = () => {
  const topBooks = [
    { id: 1, title: "Мастер и Маргарита", author: "Михаил Булгаков", price: 590, cover: masterandmargarita },
    { id: 2, title: "Война и мир", author: "Лев Толстой", price: 680, cover: warandpeace },
    { id: 3, title: "Тихий Дон", author: "Михаил Шолохов", price: 550, cover: quietdon },
  ];

  return (
    <div className="home-page">
      <Header/> 
      <main className="main-content">
        <HeroSection />
        
        <div className="sections-row">
          <NewBooksSection />
          <InspirationSection />
        </div>

        <TopBooksSection books={topBooks} />
        <WhyBooksSection />
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;