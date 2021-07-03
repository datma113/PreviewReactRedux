import { GET_PRODUCT, GET_PLAINTEXT_1, GET_PLAINTEXT_2 } from "../constants/types";

export const getProduct = (products) => {
    return {
        type: GET_PRODUCT,
        products,
    };
};

export const getPlaintext1 = (text1) => {
     return {
          type: GET_PLAINTEXT_1,
          text1
     }
}
export const getPlaintext2 = (text2) => {
     return {
          type: GET_PLAINTEXT_2,
          text2
     }
}
