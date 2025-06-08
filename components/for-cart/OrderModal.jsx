export const OrderModal = ({ cartItems, total, closeOrderModal }) => {
    return (
        <div className="order-modal-overlay">
            <div className="order-modal">
                <button
                    className="close-modal"
                    onClick={closeOrderModal}
                >
                    &times;
                </button>

                <h3>Заказ успешно оформлен!</h3>

                <div className="order-details">
                    <table>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Название</th>
                                <th>Автор</th>
                                <th>Кол-во</th>
                                <th>Цена за шт.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="order-total">
                        <h4>Итого к оплате: ${total.toFixed(2)}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};