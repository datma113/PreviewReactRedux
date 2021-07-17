import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from '../redux/action/actProduct'
const Product = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const productsMap = products.map((product, index) => {
        return <div key={index}>

            <p> {product.id} </p>
            <p> {product.name} </p>
            <p> {product.price} </p>

        </div>
    })
    console.log(products)

    useEffect(() => {
       dispatch(getProducts())
    }, [])

    return (
        <div className="container">
            {productsMap}
        </div>
    );
};

export default Product;
