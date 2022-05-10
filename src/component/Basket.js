import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import BasketItem from "./BasketItem";

const Basket = () => {
    const {basket} = useSelector(s => s)
    const {currencies,defaultCurrency,currencySymbol} = useSelector(s => s)

    if (basket.length === 0)
        return <div className="p-6">
            <div id="alert-2" className=" w-1/2 flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                <svg className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd">

                    </path>
                </svg>
                <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                    Your basket is empty!
                </div>

            </div>
        </div>

    const totalCost = basket.reduce((acc, el) => {
        return el.price * el.quantity + acc
    }, 0)
    return (
        <div>
            <h1 className="my-5 p-4 text-2xl">Your products</h1>

            <div className="m-5">

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            basket.map(el => (
                                <BasketItem el={el} key={el.id}/>
                            ))

                        }

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="m-5">
                <div id=" alert-3" className="w-1/2 flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200"
                     role="alert">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clipRule="evenodd">

                        </path>
                    </svg>
                    <div className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
                        <span>Total cost:</span>{(totalCost * currencies[defaultCurrency]).toFixed(2)} &nbsp;{currencySymbol[defaultCurrency]}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Basket;