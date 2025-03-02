import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../api';

const Navbar = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then(setCategories);
    }, []);

    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            {categories.map((category) => (
                <button key={category} onClick={() => onCategorySelect(category)}>
                    {category}
                </button>
            ))}
        </nav>
    );
};

export default Navbar;
