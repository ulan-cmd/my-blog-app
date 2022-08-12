import React from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {iphones} from '../../constants/iphones';
import styles from './Product.module.css';

const title = {
    textAlign:"center"
}

const Product = () => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const product = iphones.find(item => item.id === +params.id)

    return (
        <div className={styles.container}>
            <div>
                <img src={product.img} alt=""/>
            </div>
            <div className={styles.info}>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
                <p className={styles.quantity_status}>
                    { +searchParams.get('quantity') === 0 ? 'нет в наличии' : 'товар в наличии' }
                </p>
                <p>
                    { searchParams.get('memory') }
                </p>
            </div>
        </div>
    );
};

export default Product;


// http://localhost:3000/product/3?quantity=1