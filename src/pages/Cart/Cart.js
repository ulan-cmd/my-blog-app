import React, {useEffect, useState} from 'react';

const Cart = () => {
    const [goods, setGoods] = useState([]);

    const getProducts = () => {
        const goods = JSON.parse(localStorage.getItem('cart'));
        setGoods(Object.values(goods));
    }

    useEffect(getProducts, []);

    return (
        <div>
            <h1>Корзина</h1>
            <ul>
                {
                    goods.map(item => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;