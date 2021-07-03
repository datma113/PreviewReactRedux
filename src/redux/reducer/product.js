import {GET_PRODUCT} from "../constants/types"

let initialProduct = []

let reducer = (state = initialProduct, action) => {

     let {products, type} = action;

     if( type === GET_PRODUCT ) {
          state = products
          console.log(state)
          return state;
     }

     return state;
}
export default reducer
