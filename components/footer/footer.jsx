export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2>© {new Date().getFullYear()} BookHub. Все права защищены.</h2>
        <p>Подпишитесь на рассылку — и хорошие книги сами найдут вас!</p>
        <p>Доставка по всей России | Конфиденциальность | Помощь</p>
      </div>
    </footer>
  );
};