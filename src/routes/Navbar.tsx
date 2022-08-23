import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (): JSX.Element => {
    return (
        <main className="navbar">
            <span className="logo">Toolkit Store</span>
            <section>
                <Link className="navbar__link" 
                    to="/">Products
                </Link>
                <Link className="navbar__link"
                    to="/cart">Cart
                </Link>
                <span className="navbar__count">Cart items:</span>
            </section>
        </main>
    );
};


