import { VALUE_OF_INPUT_COMPONENT } from "../constants/types";

const initialPlainText = {}

const reducer = (state = initialPlainText, action) => {
     const { key, value, type } = action

     switch(type) {
          case VALUE_OF_INPUT_COMPONENT: 
               let cloneOfState = {...state}
               cloneOfState[key] = value
               console.log(cloneOfState)
               return cloneOfState

          default: 
          break;
     }
     return state;
}

export default reducer