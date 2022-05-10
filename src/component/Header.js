import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrency} from "../redux/actions";

const Header = () => {
    const {basket} = useSelector(s => s)
    const dispatch = useDispatch()
    return (
        <div>
            <nav className=" bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 bg-blue-200">
                <div
                    className=" container p-6  py-2.5  md:container flex flex-wrap justify-between items-center mx-auto ">
                    <a href="https://www.instagram.com/akbaraliev_73/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9"
                             alt="Flowbite Logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-gray-700 ">Ecommerse</span>
                    </a>
                    <div className="flex items-center md:order-2">
                        <button
                            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button" aria-expanded="false" type="button"
                            data-dropdown-toggle="dropdown">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full"
                                 src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                 alt="user photo"/>
                        </button>

                        <div
                            className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                            id="dropdown">
                            <div className="py-3 px-4">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span
                                    className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>

                        </div>
                        <button data-collapse-toggle="mobile-menu-2" type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clipRule="evenodd">

                                </path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                         id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <NavLink to="/Home"
                                         className="block py-2 px-4 text-xl text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/About"
                                         className="block py-2 px-4 text-xl text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Product"
                                         className="block py-2 px-4 text-xl text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ">Product</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact"
                                         className="block py-2 px-4 text-xl text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Wishlist"
                                         className="block py-2 px-4 text-xl text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ">Wishlist</NavLink>
                            </li>
                            <li>
                                {
                                    basket.length > 0 ? <div className="circle">{basket.length}</div> : null

                                }
                                <NavLink to="/Basket"
                                         className="block py-2 px-4 text-xl text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ">Basket</NavLink>
                            </li>
                        </ul>
                        <div className="flex justify-center">
                            <div className="">
                                <select
                                    onChange={(e) => dispatch(changeCurrency(e.target.value))}

                                    className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                    <option  value="RUB">RUB</option>
                                    <option value="KGS">KGS</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;