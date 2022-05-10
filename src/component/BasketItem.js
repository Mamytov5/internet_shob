import React from 'react';
import {addToBasket, decreaseQty, deleteFromBasket} from "../redux/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faMinus, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";

const BasketItem = ({el}) => {
    const dispatch = useDispatch()

    const {currencies,defaultCurrency,currencySymbol} = useSelector(s => s)

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {el.title}</th>
            <td className="px-6 py-4">
                <img className="w-10"
                     src={el.image} alt=""/>
            </td>
            <td className="px-10 py-5">
                <button
                    onClick={() => dispatch(addToBasket(el))}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <FontAwesomeIcon icon={faAdd}/></button>
                <span className="mx-2">{el.quantity}</span>
                <button
                    onClick={()=> dispatch(decreaseQty(el.id))}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <FontAwesomeIcon icon={faMinus}/></button>

            </td>
            <td className="px-6 py-4">
                {
                    el.price * el.quantity * currencies[defaultCurrency]

                }
                {
                    currencySymbol[defaultCurrency]
                }
            </td>
            <td className="px-6 py-4 text-right">
                <button
                    onClick={()=> dispatch(deleteFromBasket(el.id))}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <FontAwesomeIcon icon={faTrashCan}/></button>
            </td>
        </tr>

    );
};

export default BasketItem;