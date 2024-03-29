import {
    ADD_TO_BASKET,
    ADD_TO_WISHLIST, CHANGE_CURRENCY,
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET,
    DELETE_FROM_WISHLIST,
    GET_PRODUCTS, GET_SINGLE_PRODUCT
} from "./types";
import axios from "axios";
import {type} from "@testing-library/user-event/dist/type";

export const getProducts = () => {
    return async (dispatch) => {
        const url = await axios("https://fakestoreapi.com/products")
        const response = await url
        dispatch({type: GET_PRODUCTS, payload: response.data})
    }
}

export const getSingle = (id) => {
    return async (dispatch) => {
        const url = await axios(`https://fakestoreapi.com/products/${id}`)
        const response = await url
        dispatch({type: GET_SINGLE_PRODUCT, payload: response.data})
    }
}

export const addToBasket = (item) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    basket = [...basket,item]
    localStorage.setItem("basket",JSON.stringify(basket))

    return {type: ADD_TO_BASKET, payload: item}
}
export const deleteWishlist = (id) => {

    return {type: DELETE_FROM_WISHLIST, payload: id}
}
export const deleteFromBasket = (id) => {
    return {type: DELETE_FROM_BASKET, payload: id}
}
export const decreaseQty = (id) => {
    return {type: DECREASE_QUANTITY, payload: id}
}
export const likedProduct = (data) => {
    return {type: ADD_TO_WISHLIST, payload: data}
}
export const changeCurrency = (data) => {
    return {type: CHANGE_CURRENCY, payload: data}
}

