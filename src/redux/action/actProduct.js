import axios from "axios";
import { GET_PRODUCT, VALUE_OF_INPUT_COMPONENT, SET_PRODUCTS } from "../constants/types";

export const getProduct = (products) => {
    return {
        type: GET_PRODUCT,
        products,
    };
};

export const saveValueOfInputToStore = (key, value) => {
     return {
          type: VALUE_OF_INPUT_COMPONENT,
          key,
          value
     }
}


export const setProducts = (products) => {
     return {
          type: SET_PRODUCTS,
          products
     }
}

export const getProducts = () => {
     const url = "http://localhost:8080/quan-ao-tre-em/api/products";
     
     return dispatch => {
          return axios
          .get(url)
          .then(resp => {
               dispatch(setProducts(resp.data))
          })
          .catch(err => {
               console.log(err)
          })
     }
}