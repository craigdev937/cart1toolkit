import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";

export const Main = (): JSX.Element => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </React.Fragment>
        </BrowserRouter>
    );
};


