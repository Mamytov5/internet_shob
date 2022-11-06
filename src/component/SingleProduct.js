import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSingle} from "../redux/actions";
import {useParams} from "react-router-dom";

const SingleProduct = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const {singleItem} = useSelector(s => s)
    useEffect(() => {
        dispatch(getSingle(id))
    }, [])
    return (
        <div className="">
            <h1>{singleItem.title}</h1>
            <div>
                <img src={singleItem.image} alt=""/>
            </div>
        </div>
    );
};

export default SingleProduct;