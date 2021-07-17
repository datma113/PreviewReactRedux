import {SET_PRODUCTS} from "../constants/types"

let initialProduct = []

let reducer = (state = initialProduct, action) => {

     let {products, type} = action;

     if( type === SET_PRODUCTS ) {
          let newState = [...state]
          newState = products.products
          return newState;
     }
     return state;
}
export default reducer
