import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';


// Fetch categories
export const fetchCategories = async () => {
    const response = await axios.get(`${API_BASE_URL}/products/categories`);
    return response.data;
};

// Fetch all products
export const fetchProducts = async () => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
};

// Fetch products by category
export const fetchProductsByCategory = async (category) => {
    const response = await axios.get(`${API_BASE_URL}/products/category/${category}`);
    return response.data;
};

// Fetch a single product by ID
export const fetchProductById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
};
