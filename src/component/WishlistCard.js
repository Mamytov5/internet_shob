import React from 'react';
import Card from "./card";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_BASKET} from "../redux/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {deleteFromBasket, deleteWishlist, likedProduct} from "../redux/actions";

const WishlistCard = ({product}) => {
    const dispatch = useDispatch()
    return (
        <div className="basis-1/4 p-5  ">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-5">
                <img className="w-full "
                     src={product.image} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xs mb-2 ">{product.title}</div>
                    <p className="text-gray-700 text-base">
                        {product.description}
                    </p>
                </div>
                <div className="px-6">

                    <button onClick={() => dispatch(deleteWishlist(product.id))}>
                        <FontAwesomeIcon icon={faTrash}/>
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

export default WishlistCard;