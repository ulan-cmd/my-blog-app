import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-hot-toast';
import s from './IphoneAdmin.module.css';

const IphoneAdmin = () => {
    const [goods, setGoods] = useState([]);

    const deleteGoods = (id) => {
        const url = 'http://localhost:3001/iphones/' + id;

        const options = {
            method:'DELETE'
        }

        fetch(url, options)
            .then(response => {
                if (response.ok){
                    toast.success('Успешно удалено');
                    getGoods();
                } else{
                    toast.error('Ошибка. Статус ошибки: ' + response.status)
                }
            })
    }

    const getGoods = () => {
        const url = 'http://localhost:3001/iphones';

        fetch(url)
            .then(response => {
                if(response.ok){
                    return response.json();
                } else{
                    toast.error('Произошла ошибка. Статус ошибки: ' + response.status)
                }
            })
            .then(data => setGoods(data))
    }

    useEffect(getGoods, []);

    return (
        <div className={s.container}>
               <table>
                   <tr>
                       <th>Изображение</th>
                       <th>Название</th>
                       <th>Цена</th>
                       <th>Действия</th>
                   </tr>
                   {
                       goods.map(item => {
                           return (
                               <tr>
                                   <td><img src={item.img}/></td>
                                   <td>{item.name}</td>
                                   <td>{item.price}</td>
                                   <td>
                                       <button onClick={() => deleteGoods(item.id)}>Удалить</button>
                                       <Link to={`/admin/update-product/${item.id}`}><button>Редактировать</button></Link>
                                   </td>
                               </tr>
                           )
                       })
                   }
               </table>
        </div>
    );
};

export default IphoneAdmin;