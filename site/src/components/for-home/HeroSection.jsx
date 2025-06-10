import heroBg from '../../assets/hero-bg.png';

export const HeroSection = () => (
  <section 
    className="hero" 
    style={{ 
      backgroundImage: `url(${heroBg})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
  >
    <div className="hero-overlay"></div>
    <div className="container hero-content">
      <h2>Онлайн-магазин книг BookHub</h2>
      <p className="hero-text">
        Бестселлеры, новинки и редкие издания — все для вашего вдохновения. Читайте с удовольствием!
      </p>
    </div>
  </section>
);