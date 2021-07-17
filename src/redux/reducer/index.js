import {combineReducers} from 'redux'
import product from './product'
import plaintext from './plainText'
import products from './products'

const reducer = combineReducers({
     product,
     plaintext,
     products
})
export default reducer