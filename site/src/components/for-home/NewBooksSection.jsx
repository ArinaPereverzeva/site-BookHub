import { NavLink } from 'react-router-dom';
import openbooks from '../../assets/openbooks.png';

export const NewBooksSection = () => (
  <section className="new-books">
    <div className="container">
      <div className="section-content">
        <div className="section-image">
          <img src={openbooks} alt="Новые книги" />
        </div>
        <div className="section-text">
          <div className="section-header">
            <h3>Откройте</h3>
          </div>
          <p className="section-description">
            Позвольте книгам стать дверью в новые миры — каждая покупка 
            в нашем магазине — это шанс найти ту самую историю, которая изменит ваш взгляд на вещи.
          </p>
          <div className="action-buttons">
            <NavLink to="/catalog" className="btn btn-primary">Перейти в каталог</NavLink>
          </div>
        </div>
      </div>
    </div>
  </section>
);