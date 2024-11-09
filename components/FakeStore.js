import React, { useEffect, useState } from "react";

export default function FakeStore() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=20')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <p>Loading products...</p>;
    }

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <img src={product.image} alt={product.title} width="100" />
                    </li>
                ))}
            </ul>
        </div>
    );
}