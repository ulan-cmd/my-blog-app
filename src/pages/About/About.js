import React, {useEffect, useState} from "react";
import styles from "./About.module.css";

const About = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.status === 200){
                    return response.json();
                } else{
                    alert('Произошла ошибка. Статус ошибки: ' + response.status);
                }
            })
            .then(data => setUsers(data))
    },[])

    return(
        <div className={styles.about}>
            <h1>Страничка о нас</h1>
            <ul>
                {
                    users.map(item => {
                        return <li>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default About;