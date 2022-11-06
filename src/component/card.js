import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping, faHeart, faCheck} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_BASKET} from "../redux/types";
import {addToBasket, deleteFromBasket, deleteWishlist, likedProduct} from "../redux/actions";
import {Link} from "react-router-dom";

const Card = ({product}) => {
    const dispatch = useDispatch()
    const {basket, currencies, defaultCurrency, currencySymbol} = useSelector(s => s)

    const cost = currencies[defaultCurrency] * product.price
    const {Wishlist} = useSelector(s => s)
    const item = Wishlist.find(el => el.id === product.id)
    const inbasketProduct = basket.find(el => el.id === product.id)

    useEffect(() => {

    }, [dispatch])
    return (
        <div className="basis-1/4 p-5 image-size ">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 ">
                <Link to={`/products/product-info/${product.id}`}>
                    <img className="w-full image-size__img"
                         src={product.image} alt="Sunset in the mountains"/>
                </Link>
                <FontAwesomeIcon icon={faCheck}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xs mb-2 ">{product.title}</div>
                    <p>{cost}{currencySymbol[defaultCurrency]}</p>
                </div>
                <div>
                    <button
                        onClick={() => {
                            return inbasketProduct ? null : dispatch(addToBasket(product))
                        }}
                        className="text-white px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        {
                            inbasketProduct ? <span>
                                <Link to="/basket">
                                   <FontAwesomeIcon icon={faCheck} className="text-white"/> <span
                                    className="text-white mx-1">перейти в корзину</span>
                                </Link>
                            </span> :
                                <FontAwesomeIcon icon={faBagShopping} className="text-white"/>
                        }
                    </button>
                    <button
                        onClick={() => {
                            return item ? item.liked ?
                                dispatch(deleteWishlist(product.id)) : "" : dispatch(likedProduct(product))
                        }}
                        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        <FontAwesomeIcon className={`${
                            item ? item.liked ? "text-red-800" : "text-white" : "text-white"
                        }`} icon={faHeart}/>
                    </button>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#платья</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#магазин</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#весна</span>
                     <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#скидки</span>
                </div>
            </div>
        </div>
    );
};

export default Card;