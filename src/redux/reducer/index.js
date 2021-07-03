import {combineReducers} from 'redux'
import product from './product'
import plaintext from './plainText'

const reducer = combineReducers({
     product,
     plaintext
})
export default reducer