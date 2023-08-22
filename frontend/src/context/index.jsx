import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        await axios.get('http://localhost:8080/products')
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};