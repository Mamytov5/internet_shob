import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "./card";
import {getProducts} from "../redux/actions";
import Loading from "./Loading";

const Product = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(s => s)

    useEffect(() => {
        dispatch(getProducts())
    }, [])


    if (products.length ===0){
        return <Loading/>
    }
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