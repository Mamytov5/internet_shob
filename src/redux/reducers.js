import {
    ADD_TO_BASKET,
    ADD_TO_WISHLIST, CHANGE_CURRENCY,
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET, DELETE_FROM_WISHLIST,
    GET_PRODUCTS
} from "./types";


const initialState = {
    products: [],
    singleItem: {},
    Wishlist: [],
    basket: [],
    currencies: {
        RUB: 1,
        KGS: 1.11,
        USD: 0.014,
        EUR: 0.013,

    },
    currencySymbol: {
        RUB: "₽",
        KGS: "SOM",
        USD: "$",
        EUR: "€",
    },
    defaultCurrency: "RUB",

}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.payload}
        case ADD_TO_BASKET: {
            const foundProduct = state.basket.find(el => el.id === action.payload.id)
            if (foundProduct) {
                return {
                    ...state, basket: state.basket.map(el => {
                        return el.id === action.payload.id ? {...el, quantity: el.quantity + 1} : el
                    })
                }
            }
            return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
        }

        case DELETE_FROM_BASKET:
            return {...state, basket: state.basket.filter(el => el.id !== action.payload)}
        case DECREASE_QUANTITY:
            const foundProduct = state.basket.find(el => el.id === action.payload)
            if (foundProduct.quantity > 1) {
                return {
                    ...state, basket: state.basket.map(el => {
                        return el.id === action.payload ? {...el, quantity: el.quantity - 1} : el
                    })
                }
            }
        case ADD_TO_WISHLIST:
            const product = state.Wishlist.find(el => el.id === action.payload.id)
            return {...state, Wishlist: [...state.Wishlist, {...action.payload, liked: true}]}
        case DELETE_FROM_WISHLIST:
            return {...state, Wishlist: state.Wishlist.filter(el => el.id !== action.payload)}
        case CHANGE_CURRENCY:
            return {...state, defaultCurrency: action.payload}
        default:
            return state
    }
}
