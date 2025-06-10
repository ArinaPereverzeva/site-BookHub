import { NavLink } from 'react-router-dom';
export const SixSection = () => {
    return (
        <section className="logo-actions-section">
            <div className="container">
                <div className="logo-actions-content">
                    <div className="logo-column">
                        <h2 className="logo-large">BookHub</h2>
                    </div>
                    <div className="buttons-column">
                        <NavLink to="/account" className="btn btn-primary">Личный кабинет</NavLink>
                        <NavLink to="/cart" className="btn btn-secondary">Перейти в корзину</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};