import { GET_PLAINTEXT_1, GET_PLAINTEXT_2 } from "../constants/types";

const initialPlainText = {
     text1: "",
     text2: ""
}

const reducer = (state = initialPlainText, action) => {
     const {text1, text2, type} = action

     switch(type) {
          case GET_PLAINTEXT_1:
               state = {...state, text1}
               console.log(state)
          break;
          case GET_PLAINTEXT_2:
               state = {...state, text2}
               console.log(state)
          break;

          default: 
          break;
     }
     return state;
}

export default reducer