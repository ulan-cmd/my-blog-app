import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {toast} from 'react-hot-toast';
import s from './UpdateProduct.module.css';


const UpdateProduct = () => {
    const [goods, setGoods] = useState({});
    const params = useParams();
    const id = params.id;

    const getProductById = () => {
        const url = 'http://localhost:3001/iphones/' + id;

        fetch(url)
            .then(response => {
                if(response.ok){
                    return response.json();
                } else{
                    toast.error('При получении данных произошла ошибка');
                }
            })
            .then(data => setGoods(data))

    }

    const updateProduct = (e) => {
        const data = {
            name:e.currentTarget.name.value,
            price:e.currentTarget.price.value,
            img:e.currentTarget.img_url.value,
            description:e.currentTarget.desc.value
        }

        const options = {
            method:'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }

        const url = 'http://localhost:3001/iphones/' + id;

        fetch(url,options)
            .then(response => {
                if (response.ok){
                    toast.success('Товар успешно обновлен');
                } else{
                    toast.error('Попробуйте заново');
                }
            })
    }

    useEffect(getProductById,[])

    return (
        <div className={s.container}>
            <h1>Редактирование товара</h1>
            <form onSubmit={updateProduct} className={s.form} action="javascript:void(0)">
                <div>
                    <label htmlFor="name">Название</label>
                    <input type="text" name="name" defaultValue={goods.name}/>
                </div>
                <div>
                    <label htmlFor="img_url">Адрес изображения</label>
                    <input type="text" name="img_url" defaultValue={goods.img}/>
                </div>
                <div>
                    <label htmlFor="price">Цена</label>
                    <input type="text" name="price" defaultValue={goods.price}/>
                </div>
                <div>
                    <label htmlFor="desc">Описание</label>
                    <textarea name="desc" defaultValue={goods.description}></textarea>
                </div>
                <div>
                    <label htmlFor="category">Категория</label>
                    <select name="category" defaultValue="1">
                        <option value="0">Выберите</option>
                        <option value="1">Iphone</option>
                        <option value="2">Watches</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Добавить</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;