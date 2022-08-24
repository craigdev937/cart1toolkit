import React from "react";
import "./Products.css";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { fetchProd } from "../global/FetchAPI";

export const Products = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { error, loading, products } = 
        useAppSelector((state) => state.products);

    React.useEffect(() => {
        dispatch(fetchProd());
    }, [dispatch]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error...{error}</h1>

    return (
        <main className="products">
            {products.map((product) => (
                <section className="products__card" 
                    key={product.id}>
                    <img 
                        className="products__image"
                        src={product.image} 
                        alt={product.title} 
                    />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                </section>
            ))}
        </main>
    );
};


