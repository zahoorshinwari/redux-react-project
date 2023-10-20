import { ActionTypes } from "../constants/action-types";

export const setProducts = (products ) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}



export const selectProducts = (product ) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: product
    }
}