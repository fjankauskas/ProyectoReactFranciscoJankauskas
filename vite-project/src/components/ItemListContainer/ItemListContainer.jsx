import React, { useState, useEffect } from "react";

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productos = [
            {"id":1,
            "nombre":"Guitarra Epiphone",
            "cantidad":1,
            "precio":2000,},
            {
                "id":2,
                "nombre":"Guitarra SG Epiphone",
                "cantidad":1,
                "precio":1800,},
            {
                "id":3,
                "nombre":"Guitarra CORT",
                "cantidad":1,
                "precio":1500,}
        ];
        setItems(productos);
    }, []);

    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.nombre} - ${item.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;