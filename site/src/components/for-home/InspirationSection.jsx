import { NavLink } from 'react-router-dom';
import inspiration from '../../assets/inspiration.png';

export const InspirationSection = () => (
  <section className="inspiration">
    <div className="container">
      <div className="section-content">
        <div className="section-image"> 
          <img src={inspiration} alt="Вдохновение книгами" />
        </div>
        <div className="section-text">
          <div className="section-header">
            <h3>Вдохновитесь</h3>
          </div>
          <p>
            Подберите книгу, которая заставит ваше сердце биться чаще, а ум — жаждать большего. 
            Здесь каждая обложка скрывает возможность для роста, радости или неожиданных открытий.
          </p>
          <div className="action-buttons">
            <NavLink to="/catalog" className="btn btn-primary">Перейти в каталог</NavLink>
          </div>
        </div>
      </div>
    </div>
  </section>
);