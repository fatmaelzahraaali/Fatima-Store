import { useEffect, useState } from 'react';
import { fetchProducts, fetchProductsByCategory } from '../api';
import { Link } from 'react-router-dom';

const ProductList = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (selectedCategory) {
            fetchProductsByCategory(selectedCategory).then(setProducts);
        } else {
            fetchProducts().then(setProducts);
        }
    }, [selectedCategory]);

    return (
        <div>
            <h1>Products</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <Link to={`/product/${product.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
