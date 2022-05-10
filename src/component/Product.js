import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "./card";
import {getProducts} from "../redux/actions";

const Product = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(s => s)

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <div>
            <div className="flex flex-row flex-wrap  ">
                {
                    products.map(el => (
                        <Card product={el} key={el.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;